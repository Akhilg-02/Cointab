const RateSchema = new mongoose.Schema( 
    {
      weight:{type:Number , required:true},
      pin:{type:Number , required:true},
      Delivery:{type:String , required:true},
       
        
    },
        {
        versionKey: false,
        timestamps: true,
        }
    );

module.exports = mongoose.model("Rates",RateSchema);