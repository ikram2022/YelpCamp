const mongoose= require ('mongoose');
const review = require('./review');
const Schema=mongoose.Schema;

// https://res.cloudinary.com/dlvvoxzhf/image/upload/v1668521607/lew43arpghoyw0rzvmda.jpg


const ImagesSchema = new Schema({
    url: String,
    filename: String
});
ImagesSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const opts = {toJSON: {virtuals: true}};
const CampgroundSchema=new Schema({
    title: String,
    images: [ImagesSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]

}, opts);

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<strong><a href="/campgrounds/${this._id}">${this.title}</a><strong>`
});

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})


module.exports=mongoose.model('Campground', CampgroundSchema);