import Amplify, {Logger} from "aws-amplify";

export const logger = new Logger('logger');
Amplify.register(logger);
