import { IGetMenuOnWebsite } from "@/domain/useCases";

import { IGetInformationsWeb } from "@/domain/providers/GetInformationWeb";

export class GetMenuOnWebsite implements IGetMenuOnWebsite {

constructor(private readonly getInformation: IGetInformationsWeb){}

  async handle(callback) {
    return await this.getInformation.get(callback)
  }
}
