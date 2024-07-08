import { definitions } from "./types/options.types";
declare class Swagger {
    initialOption: definitions;
    constructor(options: definitions);
    init(): void;
    set(): void;
}
export default Swagger;
