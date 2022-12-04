import { config } from "dotenv";
config();
import { setupApp } from "./utils/setupApp";
const PORT = process.env.PORT
function main() {
    try{
        const app = setupApp();

        app.listen(PORT, () =>
          console.log(`app listening on port ${PORT}`)
        );
    }catch(err){
        console.log(err)
    }
}

main()