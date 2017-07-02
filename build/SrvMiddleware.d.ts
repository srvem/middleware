/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export declare abstract class SrvMiddleware {
    request: IncomingMessage;
    response: ServerResponse;
    abstract main(): void;
}
