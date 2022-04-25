const pinSchema = new mongoose.Schema( 
    {
        pin:{type:Number , required:true}
       
        
    },
        {
        versionKey: false,
        timestamps: true,
        }
    );

module.exports = mongoose.model("Pin",pinSchema);