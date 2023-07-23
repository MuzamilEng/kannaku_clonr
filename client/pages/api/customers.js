import connectDB from "../../database/dbConnect";

connectDB();

export default async (req, res) => {
    res.json({
        customer: "girma"
    });
}