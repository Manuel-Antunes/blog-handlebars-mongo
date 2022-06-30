import passport from "passport";
import User from '../app/models/User'

class PassportProvider {
  boot() {
    passport.serializeUser((user,done)=>{
      done(null,user._id);
    });
    passport.deserializeUser(async (id,done)=>{
      try {
        const user = await User.findById(id)
        if(!user){
          return done(new Error("User not found"));
        }
        done(null,user);
      } catch (error) {
        done(error,null);
      }
    })
  }
}

export default new PassportProvider;