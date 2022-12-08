import dotenv from 'dotenv'
dotenv.config();


export default  {
  port : process.env.PORT,
  dir_json_menu: process.env.DIRJSONMENU
}