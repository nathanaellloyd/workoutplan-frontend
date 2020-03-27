import axios from "axios";

export default axios.create({
    baseURL: "https://covidfit.developme.space/api/"
})