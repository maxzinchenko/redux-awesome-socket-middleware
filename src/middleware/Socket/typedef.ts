import { Options } from '../../services/WebSocket/typedef';


type ActionType = string | RegExp;
export type MiddlewareOptions<Req, Res, SReq = Req, DRes = Res> = Options<Req, Res, SReq, DRes> & {
  actionTypes: [ActionType, ActionType, ActionType] | [ActionType, ActionType] | [ActionType],
  completedActionTypes: [string, string]
};

export type Action<T = any> = {
  type: T;
};

export type AnyAction<T = any> = Action<T> & {
  [extraProps: string]: any;
};

export type CloseAction<T extends string = string> = {
  type: T,
  payload?: {
    code?: number
  },
  data?: {
    code?: number
  },
  code?: number
};

export type ClosedAction<T extends string = string> = {
  type: T,
  payload: {
    reason: string,
    forceDisconnection: boolean,
    code: number
  }
};

export type SocketDispatch<A extends Action = AnyAction> = {
  <T extends A>(action: T): T;
};

export type MiddlewareAPI<D extends SocketDispatch = SocketDispatch, S = unknown> = {
  dispatch: D
  getState(): S
};

export type SendAction<T, Req> = {
  type: T;
  payload?: Req;
  data?: Req;
}
