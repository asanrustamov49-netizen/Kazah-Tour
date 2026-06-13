import axios from "axios";

export const TourApi = axios.create({
  baseURL: "https://api-crud.elcho.dev/api/v1/836be-7ec6f-1adc5/tours",
});
