import { SrvRequest } from './SrvRequest';
import { SrvResponse } from './SrvResponse';
export declare abstract class SrvMiddleware {
    request: SrvRequest;
    response: SrvResponse;
    abstract main(): void;
}
