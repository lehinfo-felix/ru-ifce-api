import {  MenuReady } from "@/presetation/protocols";

export interface IGetMenuOnJson {
   handle: () => Promise<MenuReady>
}