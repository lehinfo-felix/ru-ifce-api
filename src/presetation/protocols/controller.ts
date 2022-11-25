import { HttpRequest, HttpResponse } from "./http";

export interface Controller {
   handle: (HttpRequest: HttpRequest, res: Response) => Promise<HttpResponse>
}