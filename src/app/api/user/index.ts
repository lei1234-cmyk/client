
import dbConnect,{ connectDB,Kitten } from '../../lib/dbConnect'
import Pet, { Pets } from '../../models/Pet'

connectDB();

const getList = async (req,res ) => {
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const silence = new Kitten({ name: 'Silence' });
        const user = await Kitten.find();
        res.status(200).json({success:true,data:Pet})
      } catch (err){
        res.status(400).json({success:false})
      }
    
  }
}
export default getList;