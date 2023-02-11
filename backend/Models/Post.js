import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    creatorId: {        
        type: String,
        required: true
    },
    creatorName: {
        type: String
    },
    header: {
        type: String,
        required: true,
        max: 100
    },
    data: {             
        type: String,   
        max: 5000,
        default: ""
    },
    isRequest: {
        type: Boolean,
        default: false
    },
    categories: {       
        type: [String],
        default: []
    },
    city: {             
        type: String,
        required: true
    },
    address: {         
        type: String,
        default: ""
    },
    contact: {          
        type: String,
        default: ""
    },
    donators: {
        type: Array,
        default: []
    },
    active: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        default: ""
    }
}, {timestamps: true}
);

export default mongoose.model("Post", PostSchema);