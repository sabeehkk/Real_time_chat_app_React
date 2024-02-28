import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies['jwt-token'];
    console.log(token,'tokennnn');
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No token Provided" });
    }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!decoded) {
        return res.status(401).json({ error: "Unauthorized - Invalid Token" });
      }

      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
    req.user = user; 
    next();
  } catch (error) {
    console.log(error.message, "bug in protect route");
    res.status(500).json({ message: "internal server error in middleware" });
  }
};
export default protectRoute



