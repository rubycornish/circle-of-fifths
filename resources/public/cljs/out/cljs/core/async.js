// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28442 = [];
var len__25847__auto___28448 = arguments.length;
var i__25848__auto___28449 = (0);
while(true){
if((i__25848__auto___28449 < len__25847__auto___28448)){
args28442.push((arguments[i__25848__auto___28449]));

var G__28450 = (i__25848__auto___28449 + (1));
i__25848__auto___28449 = G__28450;
continue;
} else {
}
break;
}

var G__28444 = args28442.length;
switch (G__28444) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28442.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28445 = (function (f,blockable,meta28446){
this.f = f;
this.blockable = blockable;
this.meta28446 = meta28446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28447,meta28446__$1){
var self__ = this;
var _28447__$1 = this;
return (new cljs.core.async.t_cljs$core$async28445(self__.f,self__.blockable,meta28446__$1));
});

cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28447){
var self__ = this;
var _28447__$1 = this;
return self__.meta28446;
});

cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28446","meta28446",-1700043568,null)], null);
});

cljs.core.async.t_cljs$core$async28445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28445";

cljs.core.async.t_cljs$core$async28445.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async28445");
});

cljs.core.async.__GT_t_cljs$core$async28445 = (function cljs$core$async$__GT_t_cljs$core$async28445(f__$1,blockable__$1,meta28446){
return (new cljs.core.async.t_cljs$core$async28445(f__$1,blockable__$1,meta28446));
});

}

return (new cljs.core.async.t_cljs$core$async28445(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28454 = [];
var len__25847__auto___28457 = arguments.length;
var i__25848__auto___28458 = (0);
while(true){
if((i__25848__auto___28458 < len__25847__auto___28457)){
args28454.push((arguments[i__25848__auto___28458]));

var G__28459 = (i__25848__auto___28458 + (1));
i__25848__auto___28458 = G__28459;
continue;
} else {
}
break;
}

var G__28456 = args28454.length;
switch (G__28456) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28454.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28461 = [];
var len__25847__auto___28464 = arguments.length;
var i__25848__auto___28465 = (0);
while(true){
if((i__25848__auto___28465 < len__25847__auto___28464)){
args28461.push((arguments[i__25848__auto___28465]));

var G__28466 = (i__25848__auto___28465 + (1));
i__25848__auto___28465 = G__28466;
continue;
} else {
}
break;
}

var G__28463 = args28461.length;
switch (G__28463) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28461.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28468 = [];
var len__25847__auto___28471 = arguments.length;
var i__25848__auto___28472 = (0);
while(true){
if((i__25848__auto___28472 < len__25847__auto___28471)){
args28468.push((arguments[i__25848__auto___28472]));

var G__28473 = (i__25848__auto___28472 + (1));
i__25848__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var G__28470 = args28468.length;
switch (G__28470) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28468.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28475 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28475);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28475,ret){
return (function (){
return fn1.call(null,val_28475);
});})(val_28475,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28476 = [];
var len__25847__auto___28479 = arguments.length;
var i__25848__auto___28480 = (0);
while(true){
if((i__25848__auto___28480 < len__25847__auto___28479)){
args28476.push((arguments[i__25848__auto___28480]));

var G__28481 = (i__25848__auto___28480 + (1));
i__25848__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var G__28478 = args28476.length;
switch (G__28478) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28476.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25687__auto___28483 = n;
var x_28484 = (0);
while(true){
if((x_28484 < n__25687__auto___28483)){
(a[x_28484] = (0));

var G__28485 = (x_28484 + (1));
x_28484 = G__28485;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28486 = (i + (1));
i = G__28486;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28490 = (function (alt_flag,flag,meta28491){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28491 = meta28491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28492,meta28491__$1){
var self__ = this;
var _28492__$1 = this;
return (new cljs.core.async.t_cljs$core$async28490(self__.alt_flag,self__.flag,meta28491__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28492){
var self__ = this;
var _28492__$1 = this;
return self__.meta28491;
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28491","meta28491",1699691855,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28490";

cljs.core.async.t_cljs$core$async28490.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async28490");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28490 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28490(alt_flag__$1,flag__$1,meta28491){
return (new cljs.core.async.t_cljs$core$async28490(alt_flag__$1,flag__$1,meta28491));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28490(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28496 = (function (alt_handler,flag,cb,meta28497){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28497 = meta28497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28498,meta28497__$1){
var self__ = this;
var _28498__$1 = this;
return (new cljs.core.async.t_cljs$core$async28496(self__.alt_handler,self__.flag,self__.cb,meta28497__$1));
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28498){
var self__ = this;
var _28498__$1 = this;
return self__.meta28497;
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28497","meta28497",1806249472,null)], null);
});

cljs.core.async.t_cljs$core$async28496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28496";

cljs.core.async.t_cljs$core$async28496.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async28496");
});

cljs.core.async.__GT_t_cljs$core$async28496 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28496(alt_handler__$1,flag__$1,cb__$1,meta28497){
return (new cljs.core.async.t_cljs$core$async28496(alt_handler__$1,flag__$1,cb__$1,meta28497));
});

}

return (new cljs.core.async.t_cljs$core$async28496(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28499_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28500_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24772__auto__ = wport;
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28501 = (i + (1));
i = G__28501;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24772__auto__ = ret;
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24760__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24760__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24760__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25854__auto__ = [];
var len__25847__auto___28507 = arguments.length;
var i__25848__auto___28508 = (0);
while(true){
if((i__25848__auto___28508 < len__25847__auto___28507)){
args__25854__auto__.push((arguments[i__25848__auto___28508]));

var G__28509 = (i__25848__auto___28508 + (1));
i__25848__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((1) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25855__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28504){
var map__28505 = p__28504;
var map__28505__$1 = ((((!((map__28505 == null)))?((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var opts = map__28505__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28502){
var G__28503 = cljs.core.first.call(null,seq28502);
var seq28502__$1 = cljs.core.next.call(null,seq28502);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28503,seq28502__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28510 = [];
var len__25847__auto___28560 = arguments.length;
var i__25848__auto___28561 = (0);
while(true){
if((i__25848__auto___28561 < len__25847__auto___28560)){
args28510.push((arguments[i__25848__auto___28561]));

var G__28562 = (i__25848__auto___28561 + (1));
i__25848__auto___28561 = G__28562;
continue;
} else {
}
break;
}

var G__28512 = args28510.length;
switch (G__28512) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28510.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28397__auto___28564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___28564){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___28564){
return (function (state_28536){
var state_val_28537 = (state_28536[(1)]);
if((state_val_28537 === (7))){
var inst_28532 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28538_28565 = state_28536__$1;
(statearr_28538_28565[(2)] = inst_28532);

(statearr_28538_28565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (1))){
var state_28536__$1 = state_28536;
var statearr_28539_28566 = state_28536__$1;
(statearr_28539_28566[(2)] = null);

(statearr_28539_28566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (4))){
var inst_28515 = (state_28536[(7)]);
var inst_28515__$1 = (state_28536[(2)]);
var inst_28516 = (inst_28515__$1 == null);
var state_28536__$1 = (function (){var statearr_28540 = state_28536;
(statearr_28540[(7)] = inst_28515__$1);

return statearr_28540;
})();
if(cljs.core.truth_(inst_28516)){
var statearr_28541_28567 = state_28536__$1;
(statearr_28541_28567[(1)] = (5));

} else {
var statearr_28542_28568 = state_28536__$1;
(statearr_28542_28568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (13))){
var state_28536__$1 = state_28536;
var statearr_28543_28569 = state_28536__$1;
(statearr_28543_28569[(2)] = null);

(statearr_28543_28569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (6))){
var inst_28515 = (state_28536[(7)]);
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28536__$1,(11),to,inst_28515);
} else {
if((state_val_28537 === (3))){
var inst_28534 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28536__$1,inst_28534);
} else {
if((state_val_28537 === (12))){
var state_28536__$1 = state_28536;
var statearr_28544_28570 = state_28536__$1;
(statearr_28544_28570[(2)] = null);

(statearr_28544_28570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (2))){
var state_28536__$1 = state_28536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28536__$1,(4),from);
} else {
if((state_val_28537 === (11))){
var inst_28525 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
if(cljs.core.truth_(inst_28525)){
var statearr_28545_28571 = state_28536__$1;
(statearr_28545_28571[(1)] = (12));

} else {
var statearr_28546_28572 = state_28536__$1;
(statearr_28546_28572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (9))){
var state_28536__$1 = state_28536;
var statearr_28547_28573 = state_28536__$1;
(statearr_28547_28573[(2)] = null);

(statearr_28547_28573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (5))){
var state_28536__$1 = state_28536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28548_28574 = state_28536__$1;
(statearr_28548_28574[(1)] = (8));

} else {
var statearr_28549_28575 = state_28536__$1;
(statearr_28549_28575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (14))){
var inst_28530 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28550_28576 = state_28536__$1;
(statearr_28550_28576[(2)] = inst_28530);

(statearr_28550_28576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (10))){
var inst_28522 = (state_28536[(2)]);
var state_28536__$1 = state_28536;
var statearr_28551_28577 = state_28536__$1;
(statearr_28551_28577[(2)] = inst_28522);

(statearr_28551_28577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28537 === (8))){
var inst_28519 = cljs.core.async.close_BANG_.call(null,to);
var state_28536__$1 = state_28536;
var statearr_28552_28578 = state_28536__$1;
(statearr_28552_28578[(2)] = inst_28519);

(statearr_28552_28578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___28564))
;
return ((function (switch__28285__auto__,c__28397__auto___28564){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_28536){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__28289__auto__ = e28557;
var statearr_28558_28579 = state_28536;
(statearr_28558_28579[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28580 = state_28536;
state_28536 = G__28580;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_28536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_28536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___28564))
})();
var state__28399__auto__ = (function (){var statearr_28559 = f__28398__auto__.call(null);
(statearr_28559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___28564);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___28564))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28768){
var vec__28769 = p__28768;
var v = cljs.core.nth.call(null,vec__28769,(0),null);
var p = cljs.core.nth.call(null,vec__28769,(1),null);
var job = vec__28769;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28397__auto___28955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results){
return (function (state_28776){
var state_val_28777 = (state_28776[(1)]);
if((state_val_28777 === (1))){
var state_28776__$1 = state_28776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28776__$1,(2),res,v);
} else {
if((state_val_28777 === (2))){
var inst_28773 = (state_28776[(2)]);
var inst_28774 = cljs.core.async.close_BANG_.call(null,res);
var state_28776__$1 = (function (){var statearr_28778 = state_28776;
(statearr_28778[(7)] = inst_28773);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28776__$1,inst_28774);
} else {
return null;
}
}
});})(c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results))
;
return ((function (switch__28285__auto__,c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_28782 = [null,null,null,null,null,null,null,null];
(statearr_28782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_28782[(1)] = (1));

return statearr_28782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_28776){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28783){if((e28783 instanceof Object)){
var ex__28289__auto__ = e28783;
var statearr_28784_28956 = state_28776;
(statearr_28784_28956[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28957 = state_28776;
state_28776 = G__28957;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_28776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_28776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results))
})();
var state__28399__auto__ = (function (){var statearr_28785 = f__28398__auto__.call(null);
(statearr_28785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___28955);

return statearr_28785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___28955,res,vec__28769,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28786){
var vec__28787 = p__28786;
var v = cljs.core.nth.call(null,vec__28787,(0),null);
var p = cljs.core.nth.call(null,vec__28787,(1),null);
var job = vec__28787;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25687__auto___28958 = n;
var __28959 = (0);
while(true){
if((__28959 < n__25687__auto___28958)){
var G__28790_28960 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28790_28960) {
case "compute":
var c__28397__auto___28962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28959,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (__28959,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function (state_28803){
var state_val_28804 = (state_28803[(1)]);
if((state_val_28804 === (1))){
var state_28803__$1 = state_28803;
var statearr_28805_28963 = state_28803__$1;
(statearr_28805_28963[(2)] = null);

(statearr_28805_28963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (2))){
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28803__$1,(4),jobs);
} else {
if((state_val_28804 === (3))){
var inst_28801 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28803__$1,inst_28801);
} else {
if((state_val_28804 === (4))){
var inst_28793 = (state_28803[(2)]);
var inst_28794 = process.call(null,inst_28793);
var state_28803__$1 = state_28803;
if(cljs.core.truth_(inst_28794)){
var statearr_28806_28964 = state_28803__$1;
(statearr_28806_28964[(1)] = (5));

} else {
var statearr_28807_28965 = state_28803__$1;
(statearr_28807_28965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (5))){
var state_28803__$1 = state_28803;
var statearr_28808_28966 = state_28803__$1;
(statearr_28808_28966[(2)] = null);

(statearr_28808_28966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (6))){
var state_28803__$1 = state_28803;
var statearr_28809_28967 = state_28803__$1;
(statearr_28809_28967[(2)] = null);

(statearr_28809_28967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (7))){
var inst_28799 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28810_28968 = state_28803__$1;
(statearr_28810_28968[(2)] = inst_28799);

(statearr_28810_28968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28959,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
;
return ((function (__28959,switch__28285__auto__,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_28814 = [null,null,null,null,null,null,null];
(statearr_28814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_28814[(1)] = (1));

return statearr_28814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_28803){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28815){if((e28815 instanceof Object)){
var ex__28289__auto__ = e28815;
var statearr_28816_28969 = state_28803;
(statearr_28816_28969[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28970 = state_28803;
state_28803 = G__28970;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_28803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_28803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(__28959,switch__28285__auto__,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
})();
var state__28399__auto__ = (function (){var statearr_28817 = f__28398__auto__.call(null);
(statearr_28817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___28962);

return statearr_28817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(__28959,c__28397__auto___28962,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
);


break;
case "async":
var c__28397__auto___28971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28959,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (__28959,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (1))){
var state_28830__$1 = state_28830;
var statearr_28832_28972 = state_28830__$1;
(statearr_28832_28972[(2)] = null);

(statearr_28832_28972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (2))){
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28830__$1,(4),jobs);
} else {
if((state_val_28831 === (3))){
var inst_28828 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28830__$1,inst_28828);
} else {
if((state_val_28831 === (4))){
var inst_28820 = (state_28830[(2)]);
var inst_28821 = async.call(null,inst_28820);
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28821)){
var statearr_28833_28973 = state_28830__$1;
(statearr_28833_28973[(1)] = (5));

} else {
var statearr_28834_28974 = state_28830__$1;
(statearr_28834_28974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (5))){
var state_28830__$1 = state_28830;
var statearr_28835_28975 = state_28830__$1;
(statearr_28835_28975[(2)] = null);

(statearr_28835_28975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (6))){
var state_28830__$1 = state_28830;
var statearr_28836_28976 = state_28830__$1;
(statearr_28836_28976[(2)] = null);

(statearr_28836_28976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (7))){
var inst_28826 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28837_28977 = state_28830__$1;
(statearr_28837_28977[(2)] = inst_28826);

(statearr_28837_28977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28959,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
;
return ((function (__28959,switch__28285__auto__,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_28841 = [null,null,null,null,null,null,null];
(statearr_28841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_28841[(1)] = (1));

return statearr_28841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_28830){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28842){if((e28842 instanceof Object)){
var ex__28289__auto__ = e28842;
var statearr_28843_28978 = state_28830;
(statearr_28843_28978[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28979 = state_28830;
state_28830 = G__28979;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(__28959,switch__28285__auto__,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
})();
var state__28399__auto__ = (function (){var statearr_28844 = f__28398__auto__.call(null);
(statearr_28844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___28971);

return statearr_28844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(__28959,c__28397__auto___28971,G__28790_28960,n__25687__auto___28958,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28980 = (__28959 + (1));
__28959 = G__28980;
continue;
} else {
}
break;
}

var c__28397__auto___28981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___28981,jobs,results,process,async){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___28981,jobs,results,process,async){
return (function (state_28866){
var state_val_28867 = (state_28866[(1)]);
if((state_val_28867 === (1))){
var state_28866__$1 = state_28866;
var statearr_28868_28982 = state_28866__$1;
(statearr_28868_28982[(2)] = null);

(statearr_28868_28982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (2))){
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28866__$1,(4),from);
} else {
if((state_val_28867 === (3))){
var inst_28864 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28866__$1,inst_28864);
} else {
if((state_val_28867 === (4))){
var inst_28847 = (state_28866[(7)]);
var inst_28847__$1 = (state_28866[(2)]);
var inst_28848 = (inst_28847__$1 == null);
var state_28866__$1 = (function (){var statearr_28869 = state_28866;
(statearr_28869[(7)] = inst_28847__$1);

return statearr_28869;
})();
if(cljs.core.truth_(inst_28848)){
var statearr_28870_28983 = state_28866__$1;
(statearr_28870_28983[(1)] = (5));

} else {
var statearr_28871_28984 = state_28866__$1;
(statearr_28871_28984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (5))){
var inst_28850 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28866__$1 = state_28866;
var statearr_28872_28985 = state_28866__$1;
(statearr_28872_28985[(2)] = inst_28850);

(statearr_28872_28985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (6))){
var inst_28852 = (state_28866[(8)]);
var inst_28847 = (state_28866[(7)]);
var inst_28852__$1 = cljs.core.async.chan.call(null,(1));
var inst_28853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28854 = [inst_28847,inst_28852__$1];
var inst_28855 = (new cljs.core.PersistentVector(null,2,(5),inst_28853,inst_28854,null));
var state_28866__$1 = (function (){var statearr_28873 = state_28866;
(statearr_28873[(8)] = inst_28852__$1);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28866__$1,(8),jobs,inst_28855);
} else {
if((state_val_28867 === (7))){
var inst_28862 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28874_28986 = state_28866__$1;
(statearr_28874_28986[(2)] = inst_28862);

(statearr_28874_28986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (8))){
var inst_28852 = (state_28866[(8)]);
var inst_28857 = (state_28866[(2)]);
var state_28866__$1 = (function (){var statearr_28875 = state_28866;
(statearr_28875[(9)] = inst_28857);

return statearr_28875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28866__$1,(9),results,inst_28852);
} else {
if((state_val_28867 === (9))){
var inst_28859 = (state_28866[(2)]);
var state_28866__$1 = (function (){var statearr_28876 = state_28866;
(statearr_28876[(10)] = inst_28859);

return statearr_28876;
})();
var statearr_28877_28987 = state_28866__$1;
(statearr_28877_28987[(2)] = null);

(statearr_28877_28987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___28981,jobs,results,process,async))
;
return ((function (switch__28285__auto__,c__28397__auto___28981,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_28881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_28881[(1)] = (1));

return statearr_28881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_28866){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28882){if((e28882 instanceof Object)){
var ex__28289__auto__ = e28882;
var statearr_28883_28988 = state_28866;
(statearr_28883_28988[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28989 = state_28866;
state_28866 = G__28989;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_28866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_28866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___28981,jobs,results,process,async))
})();
var state__28399__auto__ = (function (){var statearr_28884 = f__28398__auto__.call(null);
(statearr_28884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___28981);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___28981,jobs,results,process,async))
);


var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__,jobs,results,process,async){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__,jobs,results,process,async){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (7))){
var inst_28918 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28924_28990 = state_28922__$1;
(statearr_28924_28990[(2)] = inst_28918);

(statearr_28924_28990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (20))){
var state_28922__$1 = state_28922;
var statearr_28925_28991 = state_28922__$1;
(statearr_28925_28991[(2)] = null);

(statearr_28925_28991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (1))){
var state_28922__$1 = state_28922;
var statearr_28926_28992 = state_28922__$1;
(statearr_28926_28992[(2)] = null);

(statearr_28926_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (4))){
var inst_28887 = (state_28922[(7)]);
var inst_28887__$1 = (state_28922[(2)]);
var inst_28888 = (inst_28887__$1 == null);
var state_28922__$1 = (function (){var statearr_28927 = state_28922;
(statearr_28927[(7)] = inst_28887__$1);

return statearr_28927;
})();
if(cljs.core.truth_(inst_28888)){
var statearr_28928_28993 = state_28922__$1;
(statearr_28928_28993[(1)] = (5));

} else {
var statearr_28929_28994 = state_28922__$1;
(statearr_28929_28994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (15))){
var inst_28900 = (state_28922[(8)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28922__$1,(18),to,inst_28900);
} else {
if((state_val_28923 === (21))){
var inst_28913 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28930_28995 = state_28922__$1;
(statearr_28930_28995[(2)] = inst_28913);

(statearr_28930_28995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (13))){
var inst_28915 = (state_28922[(2)]);
var state_28922__$1 = (function (){var statearr_28931 = state_28922;
(statearr_28931[(9)] = inst_28915);

return statearr_28931;
})();
var statearr_28932_28996 = state_28922__$1;
(statearr_28932_28996[(2)] = null);

(statearr_28932_28996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (6))){
var inst_28887 = (state_28922[(7)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(11),inst_28887);
} else {
if((state_val_28923 === (17))){
var inst_28908 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
if(cljs.core.truth_(inst_28908)){
var statearr_28933_28997 = state_28922__$1;
(statearr_28933_28997[(1)] = (19));

} else {
var statearr_28934_28998 = state_28922__$1;
(statearr_28934_28998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (3))){
var inst_28920 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
if((state_val_28923 === (12))){
var inst_28897 = (state_28922[(10)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(14),inst_28897);
} else {
if((state_val_28923 === (2))){
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(4),results);
} else {
if((state_val_28923 === (19))){
var state_28922__$1 = state_28922;
var statearr_28935_28999 = state_28922__$1;
(statearr_28935_28999[(2)] = null);

(statearr_28935_28999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (11))){
var inst_28897 = (state_28922[(2)]);
var state_28922__$1 = (function (){var statearr_28936 = state_28922;
(statearr_28936[(10)] = inst_28897);

return statearr_28936;
})();
var statearr_28937_29000 = state_28922__$1;
(statearr_28937_29000[(2)] = null);

(statearr_28937_29000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (9))){
var state_28922__$1 = state_28922;
var statearr_28938_29001 = state_28922__$1;
(statearr_28938_29001[(2)] = null);

(statearr_28938_29001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (5))){
var state_28922__$1 = state_28922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28939_29002 = state_28922__$1;
(statearr_28939_29002[(1)] = (8));

} else {
var statearr_28940_29003 = state_28922__$1;
(statearr_28940_29003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (14))){
var inst_28900 = (state_28922[(8)]);
var inst_28902 = (state_28922[(11)]);
var inst_28900__$1 = (state_28922[(2)]);
var inst_28901 = (inst_28900__$1 == null);
var inst_28902__$1 = cljs.core.not.call(null,inst_28901);
var state_28922__$1 = (function (){var statearr_28941 = state_28922;
(statearr_28941[(8)] = inst_28900__$1);

(statearr_28941[(11)] = inst_28902__$1);

return statearr_28941;
})();
if(inst_28902__$1){
var statearr_28942_29004 = state_28922__$1;
(statearr_28942_29004[(1)] = (15));

} else {
var statearr_28943_29005 = state_28922__$1;
(statearr_28943_29005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (16))){
var inst_28902 = (state_28922[(11)]);
var state_28922__$1 = state_28922;
var statearr_28944_29006 = state_28922__$1;
(statearr_28944_29006[(2)] = inst_28902);

(statearr_28944_29006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (10))){
var inst_28894 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28945_29007 = state_28922__$1;
(statearr_28945_29007[(2)] = inst_28894);

(statearr_28945_29007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (18))){
var inst_28905 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28946_29008 = state_28922__$1;
(statearr_28946_29008[(2)] = inst_28905);

(statearr_28946_29008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (8))){
var inst_28891 = cljs.core.async.close_BANG_.call(null,to);
var state_28922__$1 = state_28922;
var statearr_28947_29009 = state_28922__$1;
(statearr_28947_29009[(2)] = inst_28891);

(statearr_28947_29009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto__,jobs,results,process,async))
;
return ((function (switch__28285__auto__,c__28397__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_28951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_28951[(1)] = (1));

return statearr_28951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_28922){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e28952){if((e28952 instanceof Object)){
var ex__28289__auto__ = e28952;
var statearr_28953_29010 = state_28922;
(statearr_28953_29010[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28922;
state_28922 = G__29011;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__,jobs,results,process,async))
})();
var state__28399__auto__ = (function (){var statearr_28954 = f__28398__auto__.call(null);
(statearr_28954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_28954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__,jobs,results,process,async))
);

return c__28397__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29012 = [];
var len__25847__auto___29015 = arguments.length;
var i__25848__auto___29016 = (0);
while(true){
if((i__25848__auto___29016 < len__25847__auto___29015)){
args29012.push((arguments[i__25848__auto___29016]));

var G__29017 = (i__25848__auto___29016 + (1));
i__25848__auto___29016 = G__29017;
continue;
} else {
}
break;
}

var G__29014 = args29012.length;
switch (G__29014) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29012.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29019 = [];
var len__25847__auto___29022 = arguments.length;
var i__25848__auto___29023 = (0);
while(true){
if((i__25848__auto___29023 < len__25847__auto___29022)){
args29019.push((arguments[i__25848__auto___29023]));

var G__29024 = (i__25848__auto___29023 + (1));
i__25848__auto___29023 = G__29024;
continue;
} else {
}
break;
}

var G__29021 = args29019.length;
switch (G__29021) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29019.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29026 = [];
var len__25847__auto___29079 = arguments.length;
var i__25848__auto___29080 = (0);
while(true){
if((i__25848__auto___29080 < len__25847__auto___29079)){
args29026.push((arguments[i__25848__auto___29080]));

var G__29081 = (i__25848__auto___29080 + (1));
i__25848__auto___29080 = G__29081;
continue;
} else {
}
break;
}

var G__29028 = args29026.length;
switch (G__29028) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29026.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28397__auto___29083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___29083,tc,fc){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___29083,tc,fc){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29050 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29056_29084 = state_29054__$1;
(statearr_29056_29084[(2)] = inst_29050);

(statearr_29056_29084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var state_29054__$1 = state_29054;
var statearr_29057_29085 = state_29054__$1;
(statearr_29057_29085[(2)] = null);

(statearr_29057_29085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var inst_29031 = (state_29054[(7)]);
var inst_29031__$1 = (state_29054[(2)]);
var inst_29032 = (inst_29031__$1 == null);
var state_29054__$1 = (function (){var statearr_29058 = state_29054;
(statearr_29058[(7)] = inst_29031__$1);

return statearr_29058;
})();
if(cljs.core.truth_(inst_29032)){
var statearr_29059_29086 = state_29054__$1;
(statearr_29059_29086[(1)] = (5));

} else {
var statearr_29060_29087 = state_29054__$1;
(statearr_29060_29087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (13))){
var state_29054__$1 = state_29054;
var statearr_29061_29088 = state_29054__$1;
(statearr_29061_29088[(2)] = null);

(statearr_29061_29088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (6))){
var inst_29031 = (state_29054[(7)]);
var inst_29037 = p.call(null,inst_29031);
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29037)){
var statearr_29062_29089 = state_29054__$1;
(statearr_29062_29089[(1)] = (9));

} else {
var statearr_29063_29090 = state_29054__$1;
(statearr_29063_29090[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29052 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (12))){
var state_29054__$1 = state_29054;
var statearr_29064_29091 = state_29054__$1;
(statearr_29064_29091[(2)] = null);

(statearr_29064_29091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (2))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(4),ch);
} else {
if((state_val_29055 === (11))){
var inst_29031 = (state_29054[(7)]);
var inst_29041 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29054__$1,(8),inst_29041,inst_29031);
} else {
if((state_val_29055 === (9))){
var state_29054__$1 = state_29054;
var statearr_29065_29092 = state_29054__$1;
(statearr_29065_29092[(2)] = tc);

(statearr_29065_29092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (5))){
var inst_29034 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29035 = cljs.core.async.close_BANG_.call(null,fc);
var state_29054__$1 = (function (){var statearr_29066 = state_29054;
(statearr_29066[(8)] = inst_29034);

return statearr_29066;
})();
var statearr_29067_29093 = state_29054__$1;
(statearr_29067_29093[(2)] = inst_29035);

(statearr_29067_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (14))){
var inst_29048 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29068_29094 = state_29054__$1;
(statearr_29068_29094[(2)] = inst_29048);

(statearr_29068_29094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var state_29054__$1 = state_29054;
var statearr_29069_29095 = state_29054__$1;
(statearr_29069_29095[(2)] = fc);

(statearr_29069_29095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (8))){
var inst_29043 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29043)){
var statearr_29070_29096 = state_29054__$1;
(statearr_29070_29096[(1)] = (12));

} else {
var statearr_29071_29097 = state_29054__$1;
(statearr_29071_29097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___29083,tc,fc))
;
return ((function (switch__28285__auto__,c__28397__auto___29083,tc,fc){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_29075 = [null,null,null,null,null,null,null,null,null];
(statearr_29075[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_29075[(1)] = (1));

return statearr_29075;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_29054){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29076){if((e29076 instanceof Object)){
var ex__28289__auto__ = e29076;
var statearr_29077_29098 = state_29054;
(statearr_29077_29098[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29099 = state_29054;
state_29054 = G__29099;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___29083,tc,fc))
})();
var state__28399__auto__ = (function (){var statearr_29078 = f__28398__auto__.call(null);
(statearr_29078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___29083);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___29083,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (7))){
var inst_29159 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29165_29186 = state_29163__$1;
(statearr_29165_29186[(2)] = inst_29159);

(statearr_29165_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (1))){
var inst_29143 = init;
var state_29163__$1 = (function (){var statearr_29166 = state_29163;
(statearr_29166[(7)] = inst_29143);

return statearr_29166;
})();
var statearr_29167_29187 = state_29163__$1;
(statearr_29167_29187[(2)] = null);

(statearr_29167_29187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29146 = (state_29163[(8)]);
var inst_29146__$1 = (state_29163[(2)]);
var inst_29147 = (inst_29146__$1 == null);
var state_29163__$1 = (function (){var statearr_29168 = state_29163;
(statearr_29168[(8)] = inst_29146__$1);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29147)){
var statearr_29169_29188 = state_29163__$1;
(statearr_29169_29188[(1)] = (5));

} else {
var statearr_29170_29189 = state_29163__$1;
(statearr_29170_29189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29146 = (state_29163[(8)]);
var inst_29150 = (state_29163[(9)]);
var inst_29143 = (state_29163[(7)]);
var inst_29150__$1 = f.call(null,inst_29143,inst_29146);
var inst_29151 = cljs.core.reduced_QMARK_.call(null,inst_29150__$1);
var state_29163__$1 = (function (){var statearr_29171 = state_29163;
(statearr_29171[(9)] = inst_29150__$1);

return statearr_29171;
})();
if(inst_29151){
var statearr_29172_29190 = state_29163__$1;
(statearr_29172_29190[(1)] = (8));

} else {
var statearr_29173_29191 = state_29163__$1;
(statearr_29173_29191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(4),ch);
} else {
if((state_val_29164 === (9))){
var inst_29150 = (state_29163[(9)]);
var inst_29143 = inst_29150;
var state_29163__$1 = (function (){var statearr_29174 = state_29163;
(statearr_29174[(7)] = inst_29143);

return statearr_29174;
})();
var statearr_29175_29192 = state_29163__$1;
(statearr_29175_29192[(2)] = null);

(statearr_29175_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var inst_29143 = (state_29163[(7)]);
var state_29163__$1 = state_29163;
var statearr_29176_29193 = state_29163__$1;
(statearr_29176_29193[(2)] = inst_29143);

(statearr_29176_29193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (10))){
var inst_29157 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29177_29194 = state_29163__$1;
(statearr_29177_29194[(2)] = inst_29157);

(statearr_29177_29194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29150 = (state_29163[(9)]);
var inst_29153 = cljs.core.deref.call(null,inst_29150);
var state_29163__$1 = state_29163;
var statearr_29178_29195 = state_29163__$1;
(statearr_29178_29195[(2)] = inst_29153);

(statearr_29178_29195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28286__auto____0 = (function (){
var statearr_29182 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29182[(0)] = cljs$core$async$reduce_$_state_machine__28286__auto__);

(statearr_29182[(1)] = (1));

return statearr_29182;
});
var cljs$core$async$reduce_$_state_machine__28286__auto____1 = (function (state_29163){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29183){if((e29183 instanceof Object)){
var ex__28289__auto__ = e29183;
var statearr_29184_29196 = state_29163;
(statearr_29184_29196[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29197 = state_29163;
state_29163 = G__29197;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28286__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28286__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28286__auto____0;
cljs$core$async$reduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28286__auto____1;
return cljs$core$async$reduce_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__))
})();
var state__28399__auto__ = (function (){var statearr_29185 = f__28398__auto__.call(null);
(statearr_29185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__))
);

return c__28397__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29198 = [];
var len__25847__auto___29250 = arguments.length;
var i__25848__auto___29251 = (0);
while(true){
if((i__25848__auto___29251 < len__25847__auto___29250)){
args29198.push((arguments[i__25848__auto___29251]));

var G__29252 = (i__25848__auto___29251 + (1));
i__25848__auto___29251 = G__29252;
continue;
} else {
}
break;
}

var G__29200 = args29198.length;
switch (G__29200) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29198.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__){
return (function (state_29225){
var state_val_29226 = (state_29225[(1)]);
if((state_val_29226 === (7))){
var inst_29207 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29227_29254 = state_29225__$1;
(statearr_29227_29254[(2)] = inst_29207);

(statearr_29227_29254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (1))){
var inst_29201 = cljs.core.seq.call(null,coll);
var inst_29202 = inst_29201;
var state_29225__$1 = (function (){var statearr_29228 = state_29225;
(statearr_29228[(7)] = inst_29202);

return statearr_29228;
})();
var statearr_29229_29255 = state_29225__$1;
(statearr_29229_29255[(2)] = null);

(statearr_29229_29255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (4))){
var inst_29202 = (state_29225[(7)]);
var inst_29205 = cljs.core.first.call(null,inst_29202);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29225__$1,(7),ch,inst_29205);
} else {
if((state_val_29226 === (13))){
var inst_29219 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29230_29256 = state_29225__$1;
(statearr_29230_29256[(2)] = inst_29219);

(statearr_29230_29256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (6))){
var inst_29210 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
if(cljs.core.truth_(inst_29210)){
var statearr_29231_29257 = state_29225__$1;
(statearr_29231_29257[(1)] = (8));

} else {
var statearr_29232_29258 = state_29225__$1;
(statearr_29232_29258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (3))){
var inst_29223 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29225__$1,inst_29223);
} else {
if((state_val_29226 === (12))){
var state_29225__$1 = state_29225;
var statearr_29233_29259 = state_29225__$1;
(statearr_29233_29259[(2)] = null);

(statearr_29233_29259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (2))){
var inst_29202 = (state_29225[(7)]);
var state_29225__$1 = state_29225;
if(cljs.core.truth_(inst_29202)){
var statearr_29234_29260 = state_29225__$1;
(statearr_29234_29260[(1)] = (4));

} else {
var statearr_29235_29261 = state_29225__$1;
(statearr_29235_29261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (11))){
var inst_29216 = cljs.core.async.close_BANG_.call(null,ch);
var state_29225__$1 = state_29225;
var statearr_29236_29262 = state_29225__$1;
(statearr_29236_29262[(2)] = inst_29216);

(statearr_29236_29262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (9))){
var state_29225__$1 = state_29225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29237_29263 = state_29225__$1;
(statearr_29237_29263[(1)] = (11));

} else {
var statearr_29238_29264 = state_29225__$1;
(statearr_29238_29264[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (5))){
var inst_29202 = (state_29225[(7)]);
var state_29225__$1 = state_29225;
var statearr_29239_29265 = state_29225__$1;
(statearr_29239_29265[(2)] = inst_29202);

(statearr_29239_29265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (10))){
var inst_29221 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29240_29266 = state_29225__$1;
(statearr_29240_29266[(2)] = inst_29221);

(statearr_29240_29266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (8))){
var inst_29202 = (state_29225[(7)]);
var inst_29212 = cljs.core.next.call(null,inst_29202);
var inst_29202__$1 = inst_29212;
var state_29225__$1 = (function (){var statearr_29241 = state_29225;
(statearr_29241[(7)] = inst_29202__$1);

return statearr_29241;
})();
var statearr_29242_29267 = state_29225__$1;
(statearr_29242_29267[(2)] = null);

(statearr_29242_29267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_29246 = [null,null,null,null,null,null,null,null];
(statearr_29246[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_29246[(1)] = (1));

return statearr_29246;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_29225){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_29225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29247){if((e29247 instanceof Object)){
var ex__28289__auto__ = e29247;
var statearr_29248_29268 = state_29225;
(statearr_29248_29268[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29269 = state_29225;
state_29225 = G__29269;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_29225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_29225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__))
})();
var state__28399__auto__ = (function (){var statearr_29249 = f__28398__auto__.call(null);
(statearr_29249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__))
);

return c__28397__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25435__auto__ = (((_ == null))?null:_);
var m__25436__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,_);
} else {
var m__25436__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25436__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,ch);
} else {
var m__25436__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m);
} else {
var m__25436__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29495 = (function (mult,ch,cs,meta29496){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29496 = meta29496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29497,meta29496__$1){
var self__ = this;
var _29497__$1 = this;
return (new cljs.core.async.t_cljs$core$async29495(self__.mult,self__.ch,self__.cs,meta29496__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29497){
var self__ = this;
var _29497__$1 = this;
return self__.meta29496;
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29496","meta29496",522181041,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29495";

cljs.core.async.t_cljs$core$async29495.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async29495");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29495 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29495(mult__$1,ch__$1,cs__$1,meta29496){
return (new cljs.core.async.t_cljs$core$async29495(mult__$1,ch__$1,cs__$1,meta29496));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29495(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28397__auto___29720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___29720,cs,m,dchan,dctr,done){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___29720,cs,m,dchan,dctr,done){
return (function (state_29632){
var state_val_29633 = (state_29632[(1)]);
if((state_val_29633 === (7))){
var inst_29628 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29634_29721 = state_29632__$1;
(statearr_29634_29721[(2)] = inst_29628);

(statearr_29634_29721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (20))){
var inst_29531 = (state_29632[(7)]);
var inst_29543 = cljs.core.first.call(null,inst_29531);
var inst_29544 = cljs.core.nth.call(null,inst_29543,(0),null);
var inst_29545 = cljs.core.nth.call(null,inst_29543,(1),null);
var state_29632__$1 = (function (){var statearr_29635 = state_29632;
(statearr_29635[(8)] = inst_29544);

return statearr_29635;
})();
if(cljs.core.truth_(inst_29545)){
var statearr_29636_29722 = state_29632__$1;
(statearr_29636_29722[(1)] = (22));

} else {
var statearr_29637_29723 = state_29632__$1;
(statearr_29637_29723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (27))){
var inst_29500 = (state_29632[(9)]);
var inst_29575 = (state_29632[(10)]);
var inst_29573 = (state_29632[(11)]);
var inst_29580 = (state_29632[(12)]);
var inst_29580__$1 = cljs.core._nth.call(null,inst_29573,inst_29575);
var inst_29581 = cljs.core.async.put_BANG_.call(null,inst_29580__$1,inst_29500,done);
var state_29632__$1 = (function (){var statearr_29638 = state_29632;
(statearr_29638[(12)] = inst_29580__$1);

return statearr_29638;
})();
if(cljs.core.truth_(inst_29581)){
var statearr_29639_29724 = state_29632__$1;
(statearr_29639_29724[(1)] = (30));

} else {
var statearr_29640_29725 = state_29632__$1;
(statearr_29640_29725[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (1))){
var state_29632__$1 = state_29632;
var statearr_29641_29726 = state_29632__$1;
(statearr_29641_29726[(2)] = null);

(statearr_29641_29726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (24))){
var inst_29531 = (state_29632[(7)]);
var inst_29550 = (state_29632[(2)]);
var inst_29551 = cljs.core.next.call(null,inst_29531);
var inst_29509 = inst_29551;
var inst_29510 = null;
var inst_29511 = (0);
var inst_29512 = (0);
var state_29632__$1 = (function (){var statearr_29642 = state_29632;
(statearr_29642[(13)] = inst_29550);

(statearr_29642[(14)] = inst_29511);

(statearr_29642[(15)] = inst_29512);

(statearr_29642[(16)] = inst_29509);

(statearr_29642[(17)] = inst_29510);

return statearr_29642;
})();
var statearr_29643_29727 = state_29632__$1;
(statearr_29643_29727[(2)] = null);

(statearr_29643_29727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (39))){
var state_29632__$1 = state_29632;
var statearr_29647_29728 = state_29632__$1;
(statearr_29647_29728[(2)] = null);

(statearr_29647_29728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (4))){
var inst_29500 = (state_29632[(9)]);
var inst_29500__$1 = (state_29632[(2)]);
var inst_29501 = (inst_29500__$1 == null);
var state_29632__$1 = (function (){var statearr_29648 = state_29632;
(statearr_29648[(9)] = inst_29500__$1);

return statearr_29648;
})();
if(cljs.core.truth_(inst_29501)){
var statearr_29649_29729 = state_29632__$1;
(statearr_29649_29729[(1)] = (5));

} else {
var statearr_29650_29730 = state_29632__$1;
(statearr_29650_29730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (15))){
var inst_29511 = (state_29632[(14)]);
var inst_29512 = (state_29632[(15)]);
var inst_29509 = (state_29632[(16)]);
var inst_29510 = (state_29632[(17)]);
var inst_29527 = (state_29632[(2)]);
var inst_29528 = (inst_29512 + (1));
var tmp29644 = inst_29511;
var tmp29645 = inst_29509;
var tmp29646 = inst_29510;
var inst_29509__$1 = tmp29645;
var inst_29510__$1 = tmp29646;
var inst_29511__$1 = tmp29644;
var inst_29512__$1 = inst_29528;
var state_29632__$1 = (function (){var statearr_29651 = state_29632;
(statearr_29651[(14)] = inst_29511__$1);

(statearr_29651[(15)] = inst_29512__$1);

(statearr_29651[(16)] = inst_29509__$1);

(statearr_29651[(18)] = inst_29527);

(statearr_29651[(17)] = inst_29510__$1);

return statearr_29651;
})();
var statearr_29652_29731 = state_29632__$1;
(statearr_29652_29731[(2)] = null);

(statearr_29652_29731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (21))){
var inst_29554 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29656_29732 = state_29632__$1;
(statearr_29656_29732[(2)] = inst_29554);

(statearr_29656_29732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (31))){
var inst_29580 = (state_29632[(12)]);
var inst_29584 = done.call(null,null);
var inst_29585 = cljs.core.async.untap_STAR_.call(null,m,inst_29580);
var state_29632__$1 = (function (){var statearr_29657 = state_29632;
(statearr_29657[(19)] = inst_29584);

return statearr_29657;
})();
var statearr_29658_29733 = state_29632__$1;
(statearr_29658_29733[(2)] = inst_29585);

(statearr_29658_29733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (32))){
var inst_29575 = (state_29632[(10)]);
var inst_29572 = (state_29632[(20)]);
var inst_29573 = (state_29632[(11)]);
var inst_29574 = (state_29632[(21)]);
var inst_29587 = (state_29632[(2)]);
var inst_29588 = (inst_29575 + (1));
var tmp29653 = inst_29572;
var tmp29654 = inst_29573;
var tmp29655 = inst_29574;
var inst_29572__$1 = tmp29653;
var inst_29573__$1 = tmp29654;
var inst_29574__$1 = tmp29655;
var inst_29575__$1 = inst_29588;
var state_29632__$1 = (function (){var statearr_29659 = state_29632;
(statearr_29659[(10)] = inst_29575__$1);

(statearr_29659[(20)] = inst_29572__$1);

(statearr_29659[(22)] = inst_29587);

(statearr_29659[(11)] = inst_29573__$1);

(statearr_29659[(21)] = inst_29574__$1);

return statearr_29659;
})();
var statearr_29660_29734 = state_29632__$1;
(statearr_29660_29734[(2)] = null);

(statearr_29660_29734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (40))){
var inst_29600 = (state_29632[(23)]);
var inst_29604 = done.call(null,null);
var inst_29605 = cljs.core.async.untap_STAR_.call(null,m,inst_29600);
var state_29632__$1 = (function (){var statearr_29661 = state_29632;
(statearr_29661[(24)] = inst_29604);

return statearr_29661;
})();
var statearr_29662_29735 = state_29632__$1;
(statearr_29662_29735[(2)] = inst_29605);

(statearr_29662_29735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (33))){
var inst_29591 = (state_29632[(25)]);
var inst_29593 = cljs.core.chunked_seq_QMARK_.call(null,inst_29591);
var state_29632__$1 = state_29632;
if(inst_29593){
var statearr_29663_29736 = state_29632__$1;
(statearr_29663_29736[(1)] = (36));

} else {
var statearr_29664_29737 = state_29632__$1;
(statearr_29664_29737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (13))){
var inst_29521 = (state_29632[(26)]);
var inst_29524 = cljs.core.async.close_BANG_.call(null,inst_29521);
var state_29632__$1 = state_29632;
var statearr_29665_29738 = state_29632__$1;
(statearr_29665_29738[(2)] = inst_29524);

(statearr_29665_29738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (22))){
var inst_29544 = (state_29632[(8)]);
var inst_29547 = cljs.core.async.close_BANG_.call(null,inst_29544);
var state_29632__$1 = state_29632;
var statearr_29666_29739 = state_29632__$1;
(statearr_29666_29739[(2)] = inst_29547);

(statearr_29666_29739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (36))){
var inst_29591 = (state_29632[(25)]);
var inst_29595 = cljs.core.chunk_first.call(null,inst_29591);
var inst_29596 = cljs.core.chunk_rest.call(null,inst_29591);
var inst_29597 = cljs.core.count.call(null,inst_29595);
var inst_29572 = inst_29596;
var inst_29573 = inst_29595;
var inst_29574 = inst_29597;
var inst_29575 = (0);
var state_29632__$1 = (function (){var statearr_29667 = state_29632;
(statearr_29667[(10)] = inst_29575);

(statearr_29667[(20)] = inst_29572);

(statearr_29667[(11)] = inst_29573);

(statearr_29667[(21)] = inst_29574);

return statearr_29667;
})();
var statearr_29668_29740 = state_29632__$1;
(statearr_29668_29740[(2)] = null);

(statearr_29668_29740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (41))){
var inst_29591 = (state_29632[(25)]);
var inst_29607 = (state_29632[(2)]);
var inst_29608 = cljs.core.next.call(null,inst_29591);
var inst_29572 = inst_29608;
var inst_29573 = null;
var inst_29574 = (0);
var inst_29575 = (0);
var state_29632__$1 = (function (){var statearr_29669 = state_29632;
(statearr_29669[(10)] = inst_29575);

(statearr_29669[(20)] = inst_29572);

(statearr_29669[(11)] = inst_29573);

(statearr_29669[(21)] = inst_29574);

(statearr_29669[(27)] = inst_29607);

return statearr_29669;
})();
var statearr_29670_29741 = state_29632__$1;
(statearr_29670_29741[(2)] = null);

(statearr_29670_29741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (43))){
var state_29632__$1 = state_29632;
var statearr_29671_29742 = state_29632__$1;
(statearr_29671_29742[(2)] = null);

(statearr_29671_29742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (29))){
var inst_29616 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29672_29743 = state_29632__$1;
(statearr_29672_29743[(2)] = inst_29616);

(statearr_29672_29743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (44))){
var inst_29625 = (state_29632[(2)]);
var state_29632__$1 = (function (){var statearr_29673 = state_29632;
(statearr_29673[(28)] = inst_29625);

return statearr_29673;
})();
var statearr_29674_29744 = state_29632__$1;
(statearr_29674_29744[(2)] = null);

(statearr_29674_29744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (6))){
var inst_29564 = (state_29632[(29)]);
var inst_29563 = cljs.core.deref.call(null,cs);
var inst_29564__$1 = cljs.core.keys.call(null,inst_29563);
var inst_29565 = cljs.core.count.call(null,inst_29564__$1);
var inst_29566 = cljs.core.reset_BANG_.call(null,dctr,inst_29565);
var inst_29571 = cljs.core.seq.call(null,inst_29564__$1);
var inst_29572 = inst_29571;
var inst_29573 = null;
var inst_29574 = (0);
var inst_29575 = (0);
var state_29632__$1 = (function (){var statearr_29675 = state_29632;
(statearr_29675[(10)] = inst_29575);

(statearr_29675[(29)] = inst_29564__$1);

(statearr_29675[(20)] = inst_29572);

(statearr_29675[(11)] = inst_29573);

(statearr_29675[(21)] = inst_29574);

(statearr_29675[(30)] = inst_29566);

return statearr_29675;
})();
var statearr_29676_29745 = state_29632__$1;
(statearr_29676_29745[(2)] = null);

(statearr_29676_29745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (28))){
var inst_29572 = (state_29632[(20)]);
var inst_29591 = (state_29632[(25)]);
var inst_29591__$1 = cljs.core.seq.call(null,inst_29572);
var state_29632__$1 = (function (){var statearr_29677 = state_29632;
(statearr_29677[(25)] = inst_29591__$1);

return statearr_29677;
})();
if(inst_29591__$1){
var statearr_29678_29746 = state_29632__$1;
(statearr_29678_29746[(1)] = (33));

} else {
var statearr_29679_29747 = state_29632__$1;
(statearr_29679_29747[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (25))){
var inst_29575 = (state_29632[(10)]);
var inst_29574 = (state_29632[(21)]);
var inst_29577 = (inst_29575 < inst_29574);
var inst_29578 = inst_29577;
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29578)){
var statearr_29680_29748 = state_29632__$1;
(statearr_29680_29748[(1)] = (27));

} else {
var statearr_29681_29749 = state_29632__$1;
(statearr_29681_29749[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (34))){
var state_29632__$1 = state_29632;
var statearr_29682_29750 = state_29632__$1;
(statearr_29682_29750[(2)] = null);

(statearr_29682_29750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (17))){
var state_29632__$1 = state_29632;
var statearr_29683_29751 = state_29632__$1;
(statearr_29683_29751[(2)] = null);

(statearr_29683_29751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (3))){
var inst_29630 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29632__$1,inst_29630);
} else {
if((state_val_29633 === (12))){
var inst_29559 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29684_29752 = state_29632__$1;
(statearr_29684_29752[(2)] = inst_29559);

(statearr_29684_29752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (2))){
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(4),ch);
} else {
if((state_val_29633 === (23))){
var state_29632__$1 = state_29632;
var statearr_29685_29753 = state_29632__$1;
(statearr_29685_29753[(2)] = null);

(statearr_29685_29753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (35))){
var inst_29614 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29686_29754 = state_29632__$1;
(statearr_29686_29754[(2)] = inst_29614);

(statearr_29686_29754[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (19))){
var inst_29531 = (state_29632[(7)]);
var inst_29535 = cljs.core.chunk_first.call(null,inst_29531);
var inst_29536 = cljs.core.chunk_rest.call(null,inst_29531);
var inst_29537 = cljs.core.count.call(null,inst_29535);
var inst_29509 = inst_29536;
var inst_29510 = inst_29535;
var inst_29511 = inst_29537;
var inst_29512 = (0);
var state_29632__$1 = (function (){var statearr_29687 = state_29632;
(statearr_29687[(14)] = inst_29511);

(statearr_29687[(15)] = inst_29512);

(statearr_29687[(16)] = inst_29509);

(statearr_29687[(17)] = inst_29510);

return statearr_29687;
})();
var statearr_29688_29755 = state_29632__$1;
(statearr_29688_29755[(2)] = null);

(statearr_29688_29755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (11))){
var inst_29509 = (state_29632[(16)]);
var inst_29531 = (state_29632[(7)]);
var inst_29531__$1 = cljs.core.seq.call(null,inst_29509);
var state_29632__$1 = (function (){var statearr_29689 = state_29632;
(statearr_29689[(7)] = inst_29531__$1);

return statearr_29689;
})();
if(inst_29531__$1){
var statearr_29690_29756 = state_29632__$1;
(statearr_29690_29756[(1)] = (16));

} else {
var statearr_29691_29757 = state_29632__$1;
(statearr_29691_29757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (9))){
var inst_29561 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29692_29758 = state_29632__$1;
(statearr_29692_29758[(2)] = inst_29561);

(statearr_29692_29758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (5))){
var inst_29507 = cljs.core.deref.call(null,cs);
var inst_29508 = cljs.core.seq.call(null,inst_29507);
var inst_29509 = inst_29508;
var inst_29510 = null;
var inst_29511 = (0);
var inst_29512 = (0);
var state_29632__$1 = (function (){var statearr_29693 = state_29632;
(statearr_29693[(14)] = inst_29511);

(statearr_29693[(15)] = inst_29512);

(statearr_29693[(16)] = inst_29509);

(statearr_29693[(17)] = inst_29510);

return statearr_29693;
})();
var statearr_29694_29759 = state_29632__$1;
(statearr_29694_29759[(2)] = null);

(statearr_29694_29759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (14))){
var state_29632__$1 = state_29632;
var statearr_29695_29760 = state_29632__$1;
(statearr_29695_29760[(2)] = null);

(statearr_29695_29760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (45))){
var inst_29622 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29696_29761 = state_29632__$1;
(statearr_29696_29761[(2)] = inst_29622);

(statearr_29696_29761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (26))){
var inst_29564 = (state_29632[(29)]);
var inst_29618 = (state_29632[(2)]);
var inst_29619 = cljs.core.seq.call(null,inst_29564);
var state_29632__$1 = (function (){var statearr_29697 = state_29632;
(statearr_29697[(31)] = inst_29618);

return statearr_29697;
})();
if(inst_29619){
var statearr_29698_29762 = state_29632__$1;
(statearr_29698_29762[(1)] = (42));

} else {
var statearr_29699_29763 = state_29632__$1;
(statearr_29699_29763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (16))){
var inst_29531 = (state_29632[(7)]);
var inst_29533 = cljs.core.chunked_seq_QMARK_.call(null,inst_29531);
var state_29632__$1 = state_29632;
if(inst_29533){
var statearr_29700_29764 = state_29632__$1;
(statearr_29700_29764[(1)] = (19));

} else {
var statearr_29701_29765 = state_29632__$1;
(statearr_29701_29765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (38))){
var inst_29611 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29702_29766 = state_29632__$1;
(statearr_29702_29766[(2)] = inst_29611);

(statearr_29702_29766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (30))){
var state_29632__$1 = state_29632;
var statearr_29703_29767 = state_29632__$1;
(statearr_29703_29767[(2)] = null);

(statearr_29703_29767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (10))){
var inst_29512 = (state_29632[(15)]);
var inst_29510 = (state_29632[(17)]);
var inst_29520 = cljs.core._nth.call(null,inst_29510,inst_29512);
var inst_29521 = cljs.core.nth.call(null,inst_29520,(0),null);
var inst_29522 = cljs.core.nth.call(null,inst_29520,(1),null);
var state_29632__$1 = (function (){var statearr_29704 = state_29632;
(statearr_29704[(26)] = inst_29521);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29705_29768 = state_29632__$1;
(statearr_29705_29768[(1)] = (13));

} else {
var statearr_29706_29769 = state_29632__$1;
(statearr_29706_29769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (18))){
var inst_29557 = (state_29632[(2)]);
var state_29632__$1 = state_29632;
var statearr_29707_29770 = state_29632__$1;
(statearr_29707_29770[(2)] = inst_29557);

(statearr_29707_29770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (42))){
var state_29632__$1 = state_29632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(45),dchan);
} else {
if((state_val_29633 === (37))){
var inst_29500 = (state_29632[(9)]);
var inst_29591 = (state_29632[(25)]);
var inst_29600 = (state_29632[(23)]);
var inst_29600__$1 = cljs.core.first.call(null,inst_29591);
var inst_29601 = cljs.core.async.put_BANG_.call(null,inst_29600__$1,inst_29500,done);
var state_29632__$1 = (function (){var statearr_29708 = state_29632;
(statearr_29708[(23)] = inst_29600__$1);

return statearr_29708;
})();
if(cljs.core.truth_(inst_29601)){
var statearr_29709_29771 = state_29632__$1;
(statearr_29709_29771[(1)] = (39));

} else {
var statearr_29710_29772 = state_29632__$1;
(statearr_29710_29772[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29633 === (8))){
var inst_29511 = (state_29632[(14)]);
var inst_29512 = (state_29632[(15)]);
var inst_29514 = (inst_29512 < inst_29511);
var inst_29515 = inst_29514;
var state_29632__$1 = state_29632;
if(cljs.core.truth_(inst_29515)){
var statearr_29711_29773 = state_29632__$1;
(statearr_29711_29773[(1)] = (10));

} else {
var statearr_29712_29774 = state_29632__$1;
(statearr_29712_29774[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___29720,cs,m,dchan,dctr,done))
;
return ((function (switch__28285__auto__,c__28397__auto___29720,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28286__auto__ = null;
var cljs$core$async$mult_$_state_machine__28286__auto____0 = (function (){
var statearr_29716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29716[(0)] = cljs$core$async$mult_$_state_machine__28286__auto__);

(statearr_29716[(1)] = (1));

return statearr_29716;
});
var cljs$core$async$mult_$_state_machine__28286__auto____1 = (function (state_29632){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_29632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29717){if((e29717 instanceof Object)){
var ex__28289__auto__ = e29717;
var statearr_29718_29775 = state_29632;
(statearr_29718_29775[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29776 = state_29632;
state_29632 = G__29776;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28286__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28286__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28286__auto____0;
cljs$core$async$mult_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28286__auto____1;
return cljs$core$async$mult_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___29720,cs,m,dchan,dctr,done))
})();
var state__28399__auto__ = (function (){var statearr_29719 = f__28398__auto__.call(null);
(statearr_29719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___29720);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___29720,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29777 = [];
var len__25847__auto___29780 = arguments.length;
var i__25848__auto___29781 = (0);
while(true){
if((i__25848__auto___29781 < len__25847__auto___29780)){
args29777.push((arguments[i__25848__auto___29781]));

var G__29782 = (i__25848__auto___29781 + (1));
i__25848__auto___29781 = G__29782;
continue;
} else {
}
break;
}

var G__29779 = args29777.length;
switch (G__29779) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29777.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,ch);
} else {
var m__25436__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,ch);
} else {
var m__25436__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m);
} else {
var m__25436__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,state_map);
} else {
var m__25436__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25435__auto__ = (((m == null))?null:m);
var m__25436__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,m,mode);
} else {
var m__25436__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25854__auto__ = [];
var len__25847__auto___29794 = arguments.length;
var i__25848__auto___29795 = (0);
while(true){
if((i__25848__auto___29795 < len__25847__auto___29794)){
args__25854__auto__.push((arguments[i__25848__auto___29795]));

var G__29796 = (i__25848__auto___29795 + (1));
i__25848__auto___29795 = G__29796;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((3) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25855__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29788){
var map__29789 = p__29788;
var map__29789__$1 = ((((!((map__29789 == null)))?((((map__29789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29789):map__29789);
var opts = map__29789__$1;
var statearr_29791_29797 = state;
(statearr_29791_29797[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29789,map__29789__$1,opts){
return (function (val){
var statearr_29792_29798 = state;
(statearr_29792_29798[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29789,map__29789__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29793_29799 = state;
(statearr_29793_29799[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29784){
var G__29785 = cljs.core.first.call(null,seq29784);
var seq29784__$1 = cljs.core.next.call(null,seq29784);
var G__29786 = cljs.core.first.call(null,seq29784__$1);
var seq29784__$2 = cljs.core.next.call(null,seq29784__$1);
var G__29787 = cljs.core.first.call(null,seq29784__$2);
var seq29784__$3 = cljs.core.next.call(null,seq29784__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29785,G__29786,G__29787,seq29784__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29965 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29966){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29966 = meta29966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29967,meta29966__$1){
var self__ = this;
var _29967__$1 = this;
return (new cljs.core.async.t_cljs$core$async29965(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29966__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29967){
var self__ = this;
var _29967__$1 = this;
return self__.meta29966;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29966","meta29966",804721358,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29965";

cljs.core.async.t_cljs$core$async29965.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async29965");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29965 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29966){
return (new cljs.core.async.t_cljs$core$async29965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29966));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29965(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28397__auto___30130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_29983 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30069_30131 = state_30067__$1;
(statearr_30069_30131[(2)] = inst_29983);

(statearr_30069_30131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (20))){
var inst_29995 = (state_30067[(7)]);
var state_30067__$1 = state_30067;
var statearr_30070_30132 = state_30067__$1;
(statearr_30070_30132[(2)] = inst_29995);

(statearr_30070_30132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (27))){
var state_30067__$1 = state_30067;
var statearr_30071_30133 = state_30067__$1;
(statearr_30071_30133[(2)] = null);

(statearr_30071_30133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var inst_29971 = (state_30067[(8)]);
var inst_29971__$1 = calc_state.call(null);
var inst_29973 = (inst_29971__$1 == null);
var inst_29974 = cljs.core.not.call(null,inst_29973);
var state_30067__$1 = (function (){var statearr_30072 = state_30067;
(statearr_30072[(8)] = inst_29971__$1);

return statearr_30072;
})();
if(inst_29974){
var statearr_30073_30134 = state_30067__$1;
(statearr_30073_30134[(1)] = (2));

} else {
var statearr_30074_30135 = state_30067__$1;
(statearr_30074_30135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (24))){
var inst_30018 = (state_30067[(9)]);
var inst_30041 = (state_30067[(10)]);
var inst_30027 = (state_30067[(11)]);
var inst_30041__$1 = inst_30018.call(null,inst_30027);
var state_30067__$1 = (function (){var statearr_30075 = state_30067;
(statearr_30075[(10)] = inst_30041__$1);

return statearr_30075;
})();
if(cljs.core.truth_(inst_30041__$1)){
var statearr_30076_30136 = state_30067__$1;
(statearr_30076_30136[(1)] = (29));

} else {
var statearr_30077_30137 = state_30067__$1;
(statearr_30077_30137[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var inst_29986 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_29986)){
var statearr_30078_30138 = state_30067__$1;
(statearr_30078_30138[(1)] = (8));

} else {
var statearr_30079_30139 = state_30067__$1;
(statearr_30079_30139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (15))){
var inst_30012 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30012)){
var statearr_30080_30140 = state_30067__$1;
(statearr_30080_30140[(1)] = (19));

} else {
var statearr_30081_30141 = state_30067__$1;
(statearr_30081_30141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (21))){
var inst_30017 = (state_30067[(12)]);
var inst_30017__$1 = (state_30067[(2)]);
var inst_30018 = cljs.core.get.call(null,inst_30017__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30019 = cljs.core.get.call(null,inst_30017__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30020 = cljs.core.get.call(null,inst_30017__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30067__$1 = (function (){var statearr_30082 = state_30067;
(statearr_30082[(9)] = inst_30018);

(statearr_30082[(12)] = inst_30017__$1);

(statearr_30082[(13)] = inst_30019);

return statearr_30082;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30067__$1,(22),inst_30020);
} else {
if((state_val_30068 === (31))){
var inst_30049 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30049)){
var statearr_30083_30142 = state_30067__$1;
(statearr_30083_30142[(1)] = (32));

} else {
var statearr_30084_30143 = state_30067__$1;
(statearr_30084_30143[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (32))){
var inst_30026 = (state_30067[(14)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,(35),out,inst_30026);
} else {
if((state_val_30068 === (33))){
var inst_30017 = (state_30067[(12)]);
var inst_29995 = inst_30017;
var state_30067__$1 = (function (){var statearr_30085 = state_30067;
(statearr_30085[(7)] = inst_29995);

return statearr_30085;
})();
var statearr_30086_30144 = state_30067__$1;
(statearr_30086_30144[(2)] = null);

(statearr_30086_30144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (13))){
var inst_29995 = (state_30067[(7)]);
var inst_30002 = inst_29995.cljs$lang$protocol_mask$partition0$;
var inst_30003 = (inst_30002 & (64));
var inst_30004 = inst_29995.cljs$core$ISeq$;
var inst_30005 = (inst_30003) || (inst_30004);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30005)){
var statearr_30087_30145 = state_30067__$1;
(statearr_30087_30145[(1)] = (16));

} else {
var statearr_30088_30146 = state_30067__$1;
(statearr_30088_30146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (22))){
var inst_30026 = (state_30067[(14)]);
var inst_30027 = (state_30067[(11)]);
var inst_30025 = (state_30067[(2)]);
var inst_30026__$1 = cljs.core.nth.call(null,inst_30025,(0),null);
var inst_30027__$1 = cljs.core.nth.call(null,inst_30025,(1),null);
var inst_30028 = (inst_30026__$1 == null);
var inst_30029 = cljs.core._EQ_.call(null,inst_30027__$1,change);
var inst_30030 = (inst_30028) || (inst_30029);
var state_30067__$1 = (function (){var statearr_30089 = state_30067;
(statearr_30089[(14)] = inst_30026__$1);

(statearr_30089[(11)] = inst_30027__$1);

return statearr_30089;
})();
if(cljs.core.truth_(inst_30030)){
var statearr_30090_30147 = state_30067__$1;
(statearr_30090_30147[(1)] = (23));

} else {
var statearr_30091_30148 = state_30067__$1;
(statearr_30091_30148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (36))){
var inst_30017 = (state_30067[(12)]);
var inst_29995 = inst_30017;
var state_30067__$1 = (function (){var statearr_30092 = state_30067;
(statearr_30092[(7)] = inst_29995);

return statearr_30092;
})();
var statearr_30093_30149 = state_30067__$1;
(statearr_30093_30149[(2)] = null);

(statearr_30093_30149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (29))){
var inst_30041 = (state_30067[(10)]);
var state_30067__$1 = state_30067;
var statearr_30094_30150 = state_30067__$1;
(statearr_30094_30150[(2)] = inst_30041);

(statearr_30094_30150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var state_30067__$1 = state_30067;
var statearr_30095_30151 = state_30067__$1;
(statearr_30095_30151[(2)] = false);

(statearr_30095_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (28))){
var inst_30037 = (state_30067[(2)]);
var inst_30038 = calc_state.call(null);
var inst_29995 = inst_30038;
var state_30067__$1 = (function (){var statearr_30096 = state_30067;
(statearr_30096[(7)] = inst_29995);

(statearr_30096[(15)] = inst_30037);

return statearr_30096;
})();
var statearr_30097_30152 = state_30067__$1;
(statearr_30097_30152[(2)] = null);

(statearr_30097_30152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (25))){
var inst_30063 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30098_30153 = state_30067__$1;
(statearr_30098_30153[(2)] = inst_30063);

(statearr_30098_30153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (34))){
var inst_30061 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30099_30154 = state_30067__$1;
(statearr_30099_30154[(2)] = inst_30061);

(statearr_30099_30154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (17))){
var state_30067__$1 = state_30067;
var statearr_30100_30155 = state_30067__$1;
(statearr_30100_30155[(2)] = false);

(statearr_30100_30155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (3))){
var state_30067__$1 = state_30067;
var statearr_30101_30156 = state_30067__$1;
(statearr_30101_30156[(2)] = false);

(statearr_30101_30156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (12))){
var inst_30065 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (2))){
var inst_29971 = (state_30067[(8)]);
var inst_29976 = inst_29971.cljs$lang$protocol_mask$partition0$;
var inst_29977 = (inst_29976 & (64));
var inst_29978 = inst_29971.cljs$core$ISeq$;
var inst_29979 = (inst_29977) || (inst_29978);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_29979)){
var statearr_30102_30157 = state_30067__$1;
(statearr_30102_30157[(1)] = (5));

} else {
var statearr_30103_30158 = state_30067__$1;
(statearr_30103_30158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (23))){
var inst_30026 = (state_30067[(14)]);
var inst_30032 = (inst_30026 == null);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30032)){
var statearr_30104_30159 = state_30067__$1;
(statearr_30104_30159[(1)] = (26));

} else {
var statearr_30105_30160 = state_30067__$1;
(statearr_30105_30160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (35))){
var inst_30052 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30052)){
var statearr_30106_30161 = state_30067__$1;
(statearr_30106_30161[(1)] = (36));

} else {
var statearr_30107_30162 = state_30067__$1;
(statearr_30107_30162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (19))){
var inst_29995 = (state_30067[(7)]);
var inst_30014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29995);
var state_30067__$1 = state_30067;
var statearr_30108_30163 = state_30067__$1;
(statearr_30108_30163[(2)] = inst_30014);

(statearr_30108_30163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (11))){
var inst_29995 = (state_30067[(7)]);
var inst_29999 = (inst_29995 == null);
var inst_30000 = cljs.core.not.call(null,inst_29999);
var state_30067__$1 = state_30067;
if(inst_30000){
var statearr_30109_30164 = state_30067__$1;
(statearr_30109_30164[(1)] = (13));

} else {
var statearr_30110_30165 = state_30067__$1;
(statearr_30110_30165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (9))){
var inst_29971 = (state_30067[(8)]);
var state_30067__$1 = state_30067;
var statearr_30111_30166 = state_30067__$1;
(statearr_30111_30166[(2)] = inst_29971);

(statearr_30111_30166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var state_30067__$1 = state_30067;
var statearr_30112_30167 = state_30067__$1;
(statearr_30112_30167[(2)] = true);

(statearr_30112_30167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (14))){
var state_30067__$1 = state_30067;
var statearr_30113_30168 = state_30067__$1;
(statearr_30113_30168[(2)] = false);

(statearr_30113_30168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (26))){
var inst_30027 = (state_30067[(11)]);
var inst_30034 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30027);
var state_30067__$1 = state_30067;
var statearr_30114_30169 = state_30067__$1;
(statearr_30114_30169[(2)] = inst_30034);

(statearr_30114_30169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (16))){
var state_30067__$1 = state_30067;
var statearr_30115_30170 = state_30067__$1;
(statearr_30115_30170[(2)] = true);

(statearr_30115_30170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (38))){
var inst_30057 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30116_30171 = state_30067__$1;
(statearr_30116_30171[(2)] = inst_30057);

(statearr_30116_30171[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (30))){
var inst_30018 = (state_30067[(9)]);
var inst_30027 = (state_30067[(11)]);
var inst_30019 = (state_30067[(13)]);
var inst_30044 = cljs.core.empty_QMARK_.call(null,inst_30018);
var inst_30045 = inst_30019.call(null,inst_30027);
var inst_30046 = cljs.core.not.call(null,inst_30045);
var inst_30047 = (inst_30044) && (inst_30046);
var state_30067__$1 = state_30067;
var statearr_30117_30172 = state_30067__$1;
(statearr_30117_30172[(2)] = inst_30047);

(statearr_30117_30172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var inst_29971 = (state_30067[(8)]);
var inst_29991 = (state_30067[(2)]);
var inst_29992 = cljs.core.get.call(null,inst_29991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29993 = cljs.core.get.call(null,inst_29991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29994 = cljs.core.get.call(null,inst_29991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29995 = inst_29971;
var state_30067__$1 = (function (){var statearr_30118 = state_30067;
(statearr_30118[(16)] = inst_29994);

(statearr_30118[(17)] = inst_29992);

(statearr_30118[(7)] = inst_29995);

(statearr_30118[(18)] = inst_29993);

return statearr_30118;
})();
var statearr_30119_30173 = state_30067__$1;
(statearr_30119_30173[(2)] = null);

(statearr_30119_30173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (18))){
var inst_30009 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30120_30174 = state_30067__$1;
(statearr_30120_30174[(2)] = inst_30009);

(statearr_30120_30174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (37))){
var state_30067__$1 = state_30067;
var statearr_30121_30175 = state_30067__$1;
(statearr_30121_30175[(2)] = null);

(statearr_30121_30175[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (8))){
var inst_29971 = (state_30067[(8)]);
var inst_29988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29971);
var state_30067__$1 = state_30067;
var statearr_30122_30176 = state_30067__$1;
(statearr_30122_30176[(2)] = inst_29988);

(statearr_30122_30176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28285__auto__,c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28286__auto__ = null;
var cljs$core$async$mix_$_state_machine__28286__auto____0 = (function (){
var statearr_30126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30126[(0)] = cljs$core$async$mix_$_state_machine__28286__auto__);

(statearr_30126[(1)] = (1));

return statearr_30126;
});
var cljs$core$async$mix_$_state_machine__28286__auto____1 = (function (state_30067){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30127){if((e30127 instanceof Object)){
var ex__28289__auto__ = e30127;
var statearr_30128_30177 = state_30067;
(statearr_30128_30177[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30178 = state_30067;
state_30067 = G__30178;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28286__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28286__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28286__auto____0;
cljs$core$async$mix_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28286__auto____1;
return cljs$core$async$mix_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28399__auto__ = (function (){var statearr_30129 = f__28398__auto__.call(null);
(statearr_30129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30130);

return statearr_30129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30130,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25435__auto__ = (((p == null))?null:p);
var m__25436__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25436__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25435__auto__ = (((p == null))?null:p);
var m__25436__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,p,v,ch);
} else {
var m__25436__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30179 = [];
var len__25847__auto___30182 = arguments.length;
var i__25848__auto___30183 = (0);
while(true){
if((i__25848__auto___30183 < len__25847__auto___30182)){
args30179.push((arguments[i__25848__auto___30183]));

var G__30184 = (i__25848__auto___30183 + (1));
i__25848__auto___30183 = G__30184;
continue;
} else {
}
break;
}

var G__30181 = args30179.length;
switch (G__30181) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30179.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25435__auto__ = (((p == null))?null:p);
var m__25436__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,p);
} else {
var m__25436__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25435__auto__ = (((p == null))?null:p);
var m__25436__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25435__auto__)]);
if(!((m__25436__auto__ == null))){
return m__25436__auto__.call(null,p,v);
} else {
var m__25436__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25436__auto____$1 == null))){
return m__25436__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30187 = [];
var len__25847__auto___30312 = arguments.length;
var i__25848__auto___30313 = (0);
while(true){
if((i__25848__auto___30313 < len__25847__auto___30312)){
args30187.push((arguments[i__25848__auto___30313]));

var G__30314 = (i__25848__auto___30313 + (1));
i__25848__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var G__30189 = args30187.length;
switch (G__30189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30187.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24772__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24772__auto__,mults){
return (function (p1__30186_SHARP_){
if(cljs.core.truth_(p1__30186_SHARP_.call(null,topic))){
return p1__30186_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30191 = meta30191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30192,meta30191__$1){
var self__ = this;
var _30192__$1 = this;
return (new cljs.core.async.t_cljs$core$async30190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30192){
var self__ = this;
var _30192__$1 = this;
return self__.meta30191;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30191","meta30191",-181146146,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30190";

cljs.core.async.t_cljs$core$async30190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async30190");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30191){
return (new cljs.core.async.t_cljs$core$async30190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28397__auto___30316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30316,mults,ensure_mult,p){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30316,mults,ensure_mult,p){
return (function (state_30264){
var state_val_30265 = (state_30264[(1)]);
if((state_val_30265 === (7))){
var inst_30260 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30266_30317 = state_30264__$1;
(statearr_30266_30317[(2)] = inst_30260);

(statearr_30266_30317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (20))){
var state_30264__$1 = state_30264;
var statearr_30267_30318 = state_30264__$1;
(statearr_30267_30318[(2)] = null);

(statearr_30267_30318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (1))){
var state_30264__$1 = state_30264;
var statearr_30268_30319 = state_30264__$1;
(statearr_30268_30319[(2)] = null);

(statearr_30268_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (24))){
var inst_30243 = (state_30264[(7)]);
var inst_30252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30243);
var state_30264__$1 = state_30264;
var statearr_30269_30320 = state_30264__$1;
(statearr_30269_30320[(2)] = inst_30252);

(statearr_30269_30320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (4))){
var inst_30195 = (state_30264[(8)]);
var inst_30195__$1 = (state_30264[(2)]);
var inst_30196 = (inst_30195__$1 == null);
var state_30264__$1 = (function (){var statearr_30270 = state_30264;
(statearr_30270[(8)] = inst_30195__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30196)){
var statearr_30271_30321 = state_30264__$1;
(statearr_30271_30321[(1)] = (5));

} else {
var statearr_30272_30322 = state_30264__$1;
(statearr_30272_30322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (15))){
var inst_30237 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30273_30323 = state_30264__$1;
(statearr_30273_30323[(2)] = inst_30237);

(statearr_30273_30323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (21))){
var inst_30257 = (state_30264[(2)]);
var state_30264__$1 = (function (){var statearr_30274 = state_30264;
(statearr_30274[(9)] = inst_30257);

return statearr_30274;
})();
var statearr_30275_30324 = state_30264__$1;
(statearr_30275_30324[(2)] = null);

(statearr_30275_30324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (13))){
var inst_30219 = (state_30264[(10)]);
var inst_30221 = cljs.core.chunked_seq_QMARK_.call(null,inst_30219);
var state_30264__$1 = state_30264;
if(inst_30221){
var statearr_30276_30325 = state_30264__$1;
(statearr_30276_30325[(1)] = (16));

} else {
var statearr_30277_30326 = state_30264__$1;
(statearr_30277_30326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (22))){
var inst_30249 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
if(cljs.core.truth_(inst_30249)){
var statearr_30278_30327 = state_30264__$1;
(statearr_30278_30327[(1)] = (23));

} else {
var statearr_30279_30328 = state_30264__$1;
(statearr_30279_30328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (6))){
var inst_30245 = (state_30264[(11)]);
var inst_30243 = (state_30264[(7)]);
var inst_30195 = (state_30264[(8)]);
var inst_30243__$1 = topic_fn.call(null,inst_30195);
var inst_30244 = cljs.core.deref.call(null,mults);
var inst_30245__$1 = cljs.core.get.call(null,inst_30244,inst_30243__$1);
var state_30264__$1 = (function (){var statearr_30280 = state_30264;
(statearr_30280[(11)] = inst_30245__$1);

(statearr_30280[(7)] = inst_30243__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30245__$1)){
var statearr_30281_30329 = state_30264__$1;
(statearr_30281_30329[(1)] = (19));

} else {
var statearr_30282_30330 = state_30264__$1;
(statearr_30282_30330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (25))){
var inst_30254 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30283_30331 = state_30264__$1;
(statearr_30283_30331[(2)] = inst_30254);

(statearr_30283_30331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (17))){
var inst_30219 = (state_30264[(10)]);
var inst_30228 = cljs.core.first.call(null,inst_30219);
var inst_30229 = cljs.core.async.muxch_STAR_.call(null,inst_30228);
var inst_30230 = cljs.core.async.close_BANG_.call(null,inst_30229);
var inst_30231 = cljs.core.next.call(null,inst_30219);
var inst_30205 = inst_30231;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30284 = state_30264;
(statearr_30284[(12)] = inst_30230);

(statearr_30284[(13)] = inst_30208);

(statearr_30284[(14)] = inst_30205);

(statearr_30284[(15)] = inst_30206);

(statearr_30284[(16)] = inst_30207);

return statearr_30284;
})();
var statearr_30285_30332 = state_30264__$1;
(statearr_30285_30332[(2)] = null);

(statearr_30285_30332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (3))){
var inst_30262 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30264__$1,inst_30262);
} else {
if((state_val_30265 === (12))){
var inst_30239 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30286_30333 = state_30264__$1;
(statearr_30286_30333[(2)] = inst_30239);

(statearr_30286_30333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (2))){
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30264__$1,(4),ch);
} else {
if((state_val_30265 === (23))){
var state_30264__$1 = state_30264;
var statearr_30287_30334 = state_30264__$1;
(statearr_30287_30334[(2)] = null);

(statearr_30287_30334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (19))){
var inst_30245 = (state_30264[(11)]);
var inst_30195 = (state_30264[(8)]);
var inst_30247 = cljs.core.async.muxch_STAR_.call(null,inst_30245);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30264__$1,(22),inst_30247,inst_30195);
} else {
if((state_val_30265 === (11))){
var inst_30219 = (state_30264[(10)]);
var inst_30205 = (state_30264[(14)]);
var inst_30219__$1 = cljs.core.seq.call(null,inst_30205);
var state_30264__$1 = (function (){var statearr_30288 = state_30264;
(statearr_30288[(10)] = inst_30219__$1);

return statearr_30288;
})();
if(inst_30219__$1){
var statearr_30289_30335 = state_30264__$1;
(statearr_30289_30335[(1)] = (13));

} else {
var statearr_30290_30336 = state_30264__$1;
(statearr_30290_30336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (9))){
var inst_30241 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30291_30337 = state_30264__$1;
(statearr_30291_30337[(2)] = inst_30241);

(statearr_30291_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (5))){
var inst_30202 = cljs.core.deref.call(null,mults);
var inst_30203 = cljs.core.vals.call(null,inst_30202);
var inst_30204 = cljs.core.seq.call(null,inst_30203);
var inst_30205 = inst_30204;
var inst_30206 = null;
var inst_30207 = (0);
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30292 = state_30264;
(statearr_30292[(13)] = inst_30208);

(statearr_30292[(14)] = inst_30205);

(statearr_30292[(15)] = inst_30206);

(statearr_30292[(16)] = inst_30207);

return statearr_30292;
})();
var statearr_30293_30338 = state_30264__$1;
(statearr_30293_30338[(2)] = null);

(statearr_30293_30338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (14))){
var state_30264__$1 = state_30264;
var statearr_30297_30339 = state_30264__$1;
(statearr_30297_30339[(2)] = null);

(statearr_30297_30339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (16))){
var inst_30219 = (state_30264[(10)]);
var inst_30223 = cljs.core.chunk_first.call(null,inst_30219);
var inst_30224 = cljs.core.chunk_rest.call(null,inst_30219);
var inst_30225 = cljs.core.count.call(null,inst_30223);
var inst_30205 = inst_30224;
var inst_30206 = inst_30223;
var inst_30207 = inst_30225;
var inst_30208 = (0);
var state_30264__$1 = (function (){var statearr_30298 = state_30264;
(statearr_30298[(13)] = inst_30208);

(statearr_30298[(14)] = inst_30205);

(statearr_30298[(15)] = inst_30206);

(statearr_30298[(16)] = inst_30207);

return statearr_30298;
})();
var statearr_30299_30340 = state_30264__$1;
(statearr_30299_30340[(2)] = null);

(statearr_30299_30340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (10))){
var inst_30208 = (state_30264[(13)]);
var inst_30205 = (state_30264[(14)]);
var inst_30206 = (state_30264[(15)]);
var inst_30207 = (state_30264[(16)]);
var inst_30213 = cljs.core._nth.call(null,inst_30206,inst_30208);
var inst_30214 = cljs.core.async.muxch_STAR_.call(null,inst_30213);
var inst_30215 = cljs.core.async.close_BANG_.call(null,inst_30214);
var inst_30216 = (inst_30208 + (1));
var tmp30294 = inst_30205;
var tmp30295 = inst_30206;
var tmp30296 = inst_30207;
var inst_30205__$1 = tmp30294;
var inst_30206__$1 = tmp30295;
var inst_30207__$1 = tmp30296;
var inst_30208__$1 = inst_30216;
var state_30264__$1 = (function (){var statearr_30300 = state_30264;
(statearr_30300[(13)] = inst_30208__$1);

(statearr_30300[(17)] = inst_30215);

(statearr_30300[(14)] = inst_30205__$1);

(statearr_30300[(15)] = inst_30206__$1);

(statearr_30300[(16)] = inst_30207__$1);

return statearr_30300;
})();
var statearr_30301_30341 = state_30264__$1;
(statearr_30301_30341[(2)] = null);

(statearr_30301_30341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (18))){
var inst_30234 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30302_30342 = state_30264__$1;
(statearr_30302_30342[(2)] = inst_30234);

(statearr_30302_30342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (8))){
var inst_30208 = (state_30264[(13)]);
var inst_30207 = (state_30264[(16)]);
var inst_30210 = (inst_30208 < inst_30207);
var inst_30211 = inst_30210;
var state_30264__$1 = state_30264;
if(cljs.core.truth_(inst_30211)){
var statearr_30303_30343 = state_30264__$1;
(statearr_30303_30343[(1)] = (10));

} else {
var statearr_30304_30344 = state_30264__$1;
(statearr_30304_30344[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30316,mults,ensure_mult,p))
;
return ((function (switch__28285__auto__,c__28397__auto___30316,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30308[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30308[(1)] = (1));

return statearr_30308;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30264){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30309){if((e30309 instanceof Object)){
var ex__28289__auto__ = e30309;
var statearr_30310_30345 = state_30264;
(statearr_30310_30345[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30264;
state_30264 = G__30346;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30316,mults,ensure_mult,p))
})();
var state__28399__auto__ = (function (){var statearr_30311 = f__28398__auto__.call(null);
(statearr_30311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30316);

return statearr_30311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30316,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30347 = [];
var len__25847__auto___30350 = arguments.length;
var i__25848__auto___30351 = (0);
while(true){
if((i__25848__auto___30351 < len__25847__auto___30350)){
args30347.push((arguments[i__25848__auto___30351]));

var G__30352 = (i__25848__auto___30351 + (1));
i__25848__auto___30351 = G__30352;
continue;
} else {
}
break;
}

var G__30349 = args30347.length;
switch (G__30349) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30347.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30354 = [];
var len__25847__auto___30357 = arguments.length;
var i__25848__auto___30358 = (0);
while(true){
if((i__25848__auto___30358 < len__25847__auto___30357)){
args30354.push((arguments[i__25848__auto___30358]));

var G__30359 = (i__25848__auto___30358 + (1));
i__25848__auto___30358 = G__30359;
continue;
} else {
}
break;
}

var G__30356 = args30354.length;
switch (G__30356) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30354.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30361 = [];
var len__25847__auto___30432 = arguments.length;
var i__25848__auto___30433 = (0);
while(true){
if((i__25848__auto___30433 < len__25847__auto___30432)){
args30361.push((arguments[i__25848__auto___30433]));

var G__30434 = (i__25848__auto___30433 + (1));
i__25848__auto___30433 = G__30434;
continue;
} else {
}
break;
}

var G__30363 = args30361.length;
switch (G__30363) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30361.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28397__auto___30436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30402){
var state_val_30403 = (state_30402[(1)]);
if((state_val_30403 === (7))){
var state_30402__$1 = state_30402;
var statearr_30404_30437 = state_30402__$1;
(statearr_30404_30437[(2)] = null);

(statearr_30404_30437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (1))){
var state_30402__$1 = state_30402;
var statearr_30405_30438 = state_30402__$1;
(statearr_30405_30438[(2)] = null);

(statearr_30405_30438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (4))){
var inst_30366 = (state_30402[(7)]);
var inst_30368 = (inst_30366 < cnt);
var state_30402__$1 = state_30402;
if(cljs.core.truth_(inst_30368)){
var statearr_30406_30439 = state_30402__$1;
(statearr_30406_30439[(1)] = (6));

} else {
var statearr_30407_30440 = state_30402__$1;
(statearr_30407_30440[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (15))){
var inst_30398 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30408_30441 = state_30402__$1;
(statearr_30408_30441[(2)] = inst_30398);

(statearr_30408_30441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (13))){
var inst_30391 = cljs.core.async.close_BANG_.call(null,out);
var state_30402__$1 = state_30402;
var statearr_30409_30442 = state_30402__$1;
(statearr_30409_30442[(2)] = inst_30391);

(statearr_30409_30442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (6))){
var state_30402__$1 = state_30402;
var statearr_30410_30443 = state_30402__$1;
(statearr_30410_30443[(2)] = null);

(statearr_30410_30443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (3))){
var inst_30400 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30402__$1,inst_30400);
} else {
if((state_val_30403 === (12))){
var inst_30388 = (state_30402[(8)]);
var inst_30388__$1 = (state_30402[(2)]);
var inst_30389 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30388__$1);
var state_30402__$1 = (function (){var statearr_30411 = state_30402;
(statearr_30411[(8)] = inst_30388__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30412_30444 = state_30402__$1;
(statearr_30412_30444[(1)] = (13));

} else {
var statearr_30413_30445 = state_30402__$1;
(statearr_30413_30445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (2))){
var inst_30365 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30366 = (0);
var state_30402__$1 = (function (){var statearr_30414 = state_30402;
(statearr_30414[(9)] = inst_30365);

(statearr_30414[(7)] = inst_30366);

return statearr_30414;
})();
var statearr_30415_30446 = state_30402__$1;
(statearr_30415_30446[(2)] = null);

(statearr_30415_30446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (11))){
var inst_30366 = (state_30402[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30402,(10),Object,null,(9));
var inst_30375 = chs__$1.call(null,inst_30366);
var inst_30376 = done.call(null,inst_30366);
var inst_30377 = cljs.core.async.take_BANG_.call(null,inst_30375,inst_30376);
var state_30402__$1 = state_30402;
var statearr_30416_30447 = state_30402__$1;
(statearr_30416_30447[(2)] = inst_30377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (9))){
var inst_30366 = (state_30402[(7)]);
var inst_30379 = (state_30402[(2)]);
var inst_30380 = (inst_30366 + (1));
var inst_30366__$1 = inst_30380;
var state_30402__$1 = (function (){var statearr_30417 = state_30402;
(statearr_30417[(10)] = inst_30379);

(statearr_30417[(7)] = inst_30366__$1);

return statearr_30417;
})();
var statearr_30418_30448 = state_30402__$1;
(statearr_30418_30448[(2)] = null);

(statearr_30418_30448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (5))){
var inst_30386 = (state_30402[(2)]);
var state_30402__$1 = (function (){var statearr_30419 = state_30402;
(statearr_30419[(11)] = inst_30386);

return statearr_30419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30402__$1,(12),dchan);
} else {
if((state_val_30403 === (14))){
var inst_30388 = (state_30402[(8)]);
var inst_30393 = cljs.core.apply.call(null,f,inst_30388);
var state_30402__$1 = state_30402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30402__$1,(16),out,inst_30393);
} else {
if((state_val_30403 === (16))){
var inst_30395 = (state_30402[(2)]);
var state_30402__$1 = (function (){var statearr_30420 = state_30402;
(statearr_30420[(12)] = inst_30395);

return statearr_30420;
})();
var statearr_30421_30449 = state_30402__$1;
(statearr_30421_30449[(2)] = null);

(statearr_30421_30449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (10))){
var inst_30370 = (state_30402[(2)]);
var inst_30371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30402__$1 = (function (){var statearr_30422 = state_30402;
(statearr_30422[(13)] = inst_30370);

return statearr_30422;
})();
var statearr_30423_30450 = state_30402__$1;
(statearr_30423_30450[(2)] = inst_30371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30403 === (8))){
var inst_30384 = (state_30402[(2)]);
var state_30402__$1 = state_30402;
var statearr_30424_30451 = state_30402__$1;
(statearr_30424_30451[(2)] = inst_30384);

(statearr_30424_30451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28285__auto__,c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30428[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30428[(1)] = (1));

return statearr_30428;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30402){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30429){if((e30429 instanceof Object)){
var ex__28289__auto__ = e30429;
var statearr_30430_30452 = state_30402;
(statearr_30430_30452[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30453 = state_30402;
state_30402 = G__30453;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28399__auto__ = (function (){var statearr_30431 = f__28398__auto__.call(null);
(statearr_30431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30436);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30436,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30455 = [];
var len__25847__auto___30513 = arguments.length;
var i__25848__auto___30514 = (0);
while(true){
if((i__25848__auto___30514 < len__25847__auto___30513)){
args30455.push((arguments[i__25848__auto___30514]));

var G__30515 = (i__25848__auto___30514 + (1));
i__25848__auto___30514 = G__30515;
continue;
} else {
}
break;
}

var G__30457 = args30455.length;
switch (G__30457) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30455.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___30517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30517,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30517,out){
return (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (7))){
var inst_30468 = (state_30489[(7)]);
var inst_30469 = (state_30489[(8)]);
var inst_30468__$1 = (state_30489[(2)]);
var inst_30469__$1 = cljs.core.nth.call(null,inst_30468__$1,(0),null);
var inst_30470 = cljs.core.nth.call(null,inst_30468__$1,(1),null);
var inst_30471 = (inst_30469__$1 == null);
var state_30489__$1 = (function (){var statearr_30491 = state_30489;
(statearr_30491[(7)] = inst_30468__$1);

(statearr_30491[(9)] = inst_30470);

(statearr_30491[(8)] = inst_30469__$1);

return statearr_30491;
})();
if(cljs.core.truth_(inst_30471)){
var statearr_30492_30518 = state_30489__$1;
(statearr_30492_30518[(1)] = (8));

} else {
var statearr_30493_30519 = state_30489__$1;
(statearr_30493_30519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (1))){
var inst_30458 = cljs.core.vec.call(null,chs);
var inst_30459 = inst_30458;
var state_30489__$1 = (function (){var statearr_30494 = state_30489;
(statearr_30494[(10)] = inst_30459);

return statearr_30494;
})();
var statearr_30495_30520 = state_30489__$1;
(statearr_30495_30520[(2)] = null);

(statearr_30495_30520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30459 = (state_30489[(10)]);
var state_30489__$1 = state_30489;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30489__$1,(7),inst_30459);
} else {
if((state_val_30490 === (6))){
var inst_30485 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30496_30521 = state_30489__$1;
(statearr_30496_30521[(2)] = inst_30485);

(statearr_30496_30521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (3))){
var inst_30487 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30489__$1,inst_30487);
} else {
if((state_val_30490 === (2))){
var inst_30459 = (state_30489[(10)]);
var inst_30461 = cljs.core.count.call(null,inst_30459);
var inst_30462 = (inst_30461 > (0));
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30462)){
var statearr_30498_30522 = state_30489__$1;
(statearr_30498_30522[(1)] = (4));

} else {
var statearr_30499_30523 = state_30489__$1;
(statearr_30499_30523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (11))){
var inst_30459 = (state_30489[(10)]);
var inst_30478 = (state_30489[(2)]);
var tmp30497 = inst_30459;
var inst_30459__$1 = tmp30497;
var state_30489__$1 = (function (){var statearr_30500 = state_30489;
(statearr_30500[(11)] = inst_30478);

(statearr_30500[(10)] = inst_30459__$1);

return statearr_30500;
})();
var statearr_30501_30524 = state_30489__$1;
(statearr_30501_30524[(2)] = null);

(statearr_30501_30524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (9))){
var inst_30469 = (state_30489[(8)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30489__$1,(11),out,inst_30469);
} else {
if((state_val_30490 === (5))){
var inst_30483 = cljs.core.async.close_BANG_.call(null,out);
var state_30489__$1 = state_30489;
var statearr_30502_30525 = state_30489__$1;
(statearr_30502_30525[(2)] = inst_30483);

(statearr_30502_30525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (10))){
var inst_30481 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30503_30526 = state_30489__$1;
(statearr_30503_30526[(2)] = inst_30481);

(statearr_30503_30526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30459 = (state_30489[(10)]);
var inst_30468 = (state_30489[(7)]);
var inst_30470 = (state_30489[(9)]);
var inst_30469 = (state_30489[(8)]);
var inst_30473 = (function (){var cs = inst_30459;
var vec__30464 = inst_30468;
var v = inst_30469;
var c = inst_30470;
return ((function (cs,vec__30464,v,c,inst_30459,inst_30468,inst_30470,inst_30469,state_val_30490,c__28397__auto___30517,out){
return (function (p1__30454_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30454_SHARP_);
});
;})(cs,vec__30464,v,c,inst_30459,inst_30468,inst_30470,inst_30469,state_val_30490,c__28397__auto___30517,out))
})();
var inst_30474 = cljs.core.filterv.call(null,inst_30473,inst_30459);
var inst_30459__$1 = inst_30474;
var state_30489__$1 = (function (){var statearr_30504 = state_30489;
(statearr_30504[(10)] = inst_30459__$1);

return statearr_30504;
})();
var statearr_30505_30527 = state_30489__$1;
(statearr_30505_30527[(2)] = null);

(statearr_30505_30527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30517,out))
;
return ((function (switch__28285__auto__,c__28397__auto___30517,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30509 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30509[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30509[(1)] = (1));

return statearr_30509;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30489){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30510){if((e30510 instanceof Object)){
var ex__28289__auto__ = e30510;
var statearr_30511_30528 = state_30489;
(statearr_30511_30528[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30529 = state_30489;
state_30489 = G__30529;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30517,out))
})();
var state__28399__auto__ = (function (){var statearr_30512 = f__28398__auto__.call(null);
(statearr_30512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30517);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30517,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30530 = [];
var len__25847__auto___30579 = arguments.length;
var i__25848__auto___30580 = (0);
while(true){
if((i__25848__auto___30580 < len__25847__auto___30579)){
args30530.push((arguments[i__25848__auto___30580]));

var G__30581 = (i__25848__auto___30580 + (1));
i__25848__auto___30580 = G__30581;
continue;
} else {
}
break;
}

var G__30532 = args30530.length;
switch (G__30532) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30530.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___30583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30583,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30583,out){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30538 = (state_30556[(7)]);
var inst_30538__$1 = (state_30556[(2)]);
var inst_30539 = (inst_30538__$1 == null);
var inst_30540 = cljs.core.not.call(null,inst_30539);
var state_30556__$1 = (function (){var statearr_30558 = state_30556;
(statearr_30558[(7)] = inst_30538__$1);

return statearr_30558;
})();
if(inst_30540){
var statearr_30559_30584 = state_30556__$1;
(statearr_30559_30584[(1)] = (8));

} else {
var statearr_30560_30585 = state_30556__$1;
(statearr_30560_30585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (1))){
var inst_30533 = (0);
var state_30556__$1 = (function (){var statearr_30561 = state_30556;
(statearr_30561[(8)] = inst_30533);

return statearr_30561;
})();
var statearr_30562_30586 = state_30556__$1;
(statearr_30562_30586[(2)] = null);

(statearr_30562_30586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30556__$1,(7),ch);
} else {
if((state_val_30557 === (6))){
var inst_30551 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30563_30587 = state_30556__$1;
(statearr_30563_30587[(2)] = inst_30551);

(statearr_30563_30587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30553 = (state_30556[(2)]);
var inst_30554 = cljs.core.async.close_BANG_.call(null,out);
var state_30556__$1 = (function (){var statearr_30564 = state_30556;
(statearr_30564[(9)] = inst_30553);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
if((state_val_30557 === (2))){
var inst_30533 = (state_30556[(8)]);
var inst_30535 = (inst_30533 < n);
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30535)){
var statearr_30565_30588 = state_30556__$1;
(statearr_30565_30588[(1)] = (4));

} else {
var statearr_30566_30589 = state_30556__$1;
(statearr_30566_30589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (11))){
var inst_30533 = (state_30556[(8)]);
var inst_30543 = (state_30556[(2)]);
var inst_30544 = (inst_30533 + (1));
var inst_30533__$1 = inst_30544;
var state_30556__$1 = (function (){var statearr_30567 = state_30556;
(statearr_30567[(8)] = inst_30533__$1);

(statearr_30567[(10)] = inst_30543);

return statearr_30567;
})();
var statearr_30568_30590 = state_30556__$1;
(statearr_30568_30590[(2)] = null);

(statearr_30568_30590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (9))){
var state_30556__$1 = state_30556;
var statearr_30569_30591 = state_30556__$1;
(statearr_30569_30591[(2)] = null);

(statearr_30569_30591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (5))){
var state_30556__$1 = state_30556;
var statearr_30570_30592 = state_30556__$1;
(statearr_30570_30592[(2)] = null);

(statearr_30570_30592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (10))){
var inst_30548 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30571_30593 = state_30556__$1;
(statearr_30571_30593[(2)] = inst_30548);

(statearr_30571_30593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (8))){
var inst_30538 = (state_30556[(7)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(11),out,inst_30538);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30583,out))
;
return ((function (switch__28285__auto__,c__28397__auto___30583,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30556){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__28289__auto__ = e30576;
var statearr_30577_30594 = state_30556;
(statearr_30577_30594[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30595 = state_30556;
state_30556 = G__30595;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30583,out))
})();
var state__28399__auto__ = (function (){var statearr_30578 = f__28398__auto__.call(null);
(statearr_30578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30583);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30583,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30603 = (function (map_LT_,f,ch,meta30604){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30604 = meta30604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30605,meta30604__$1){
var self__ = this;
var _30605__$1 = this;
return (new cljs.core.async.t_cljs$core$async30603(self__.map_LT_,self__.f,self__.ch,meta30604__$1));
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30605){
var self__ = this;
var _30605__$1 = this;
return self__.meta30604;
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30606 = (function (map_LT_,f,ch,meta30604,_,fn1,meta30607){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30604 = meta30604;
this._ = _;
this.fn1 = fn1;
this.meta30607 = meta30607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30608,meta30607__$1){
var self__ = this;
var _30608__$1 = this;
return (new cljs.core.async.t_cljs$core$async30606(self__.map_LT_,self__.f,self__.ch,self__.meta30604,self__._,self__.fn1,meta30607__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30608){
var self__ = this;
var _30608__$1 = this;
return self__.meta30607;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30596_SHARP_){
return f1.call(null,(((p1__30596_SHARP_ == null))?null:self__.f.call(null,p1__30596_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30604","meta30604",740128331,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30603","cljs.core.async/t_cljs$core$async30603",-2116908600,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30607","meta30607",113593716,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30606";

cljs.core.async.t_cljs$core$async30606.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async30606");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30606 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30606(map_LT___$1,f__$1,ch__$1,meta30604__$1,___$2,fn1__$1,meta30607){
return (new cljs.core.async.t_cljs$core$async30606(map_LT___$1,f__$1,ch__$1,meta30604__$1,___$2,fn1__$1,meta30607));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30606(self__.map_LT_,self__.f,self__.ch,self__.meta30604,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24760__auto__ = ret;
if(cljs.core.truth_(and__24760__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24760__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30604","meta30604",740128331,null)], null);
});

cljs.core.async.t_cljs$core$async30603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30603";

cljs.core.async.t_cljs$core$async30603.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async30603");
});

cljs.core.async.__GT_t_cljs$core$async30603 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30603(map_LT___$1,f__$1,ch__$1,meta30604){
return (new cljs.core.async.t_cljs$core$async30603(map_LT___$1,f__$1,ch__$1,meta30604));
});

}

return (new cljs.core.async.t_cljs$core$async30603(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30612 = (function (map_GT_,f,ch,meta30613){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30613 = meta30613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30614,meta30613__$1){
var self__ = this;
var _30614__$1 = this;
return (new cljs.core.async.t_cljs$core$async30612(self__.map_GT_,self__.f,self__.ch,meta30613__$1));
});

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30614){
var self__ = this;
var _30614__$1 = this;
return self__.meta30613;
});

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30613","meta30613",995547796,null)], null);
});

cljs.core.async.t_cljs$core$async30612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30612";

cljs.core.async.t_cljs$core$async30612.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async30612");
});

cljs.core.async.__GT_t_cljs$core$async30612 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30612(map_GT___$1,f__$1,ch__$1,meta30613){
return (new cljs.core.async.t_cljs$core$async30612(map_GT___$1,f__$1,ch__$1,meta30613));
});

}

return (new cljs.core.async.t_cljs$core$async30612(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30618 = (function (filter_GT_,p,ch,meta30619){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30619 = meta30619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30620,meta30619__$1){
var self__ = this;
var _30620__$1 = this;
return (new cljs.core.async.t_cljs$core$async30618(self__.filter_GT_,self__.p,self__.ch,meta30619__$1));
});

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30620){
var self__ = this;
var _30620__$1 = this;
return self__.meta30619;
});

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30619","meta30619",1708456388,null)], null);
});

cljs.core.async.t_cljs$core$async30618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30618";

cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.core.async/t_cljs$core$async30618");
});

cljs.core.async.__GT_t_cljs$core$async30618 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30618(filter_GT___$1,p__$1,ch__$1,meta30619){
return (new cljs.core.async.t_cljs$core$async30618(filter_GT___$1,p__$1,ch__$1,meta30619));
});

}

return (new cljs.core.async.t_cljs$core$async30618(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30621 = [];
var len__25847__auto___30665 = arguments.length;
var i__25848__auto___30666 = (0);
while(true){
if((i__25848__auto___30666 < len__25847__auto___30665)){
args30621.push((arguments[i__25848__auto___30666]));

var G__30667 = (i__25848__auto___30666 + (1));
i__25848__auto___30666 = G__30667;
continue;
} else {
}
break;
}

var G__30623 = args30621.length;
switch (G__30623) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30621.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___30669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30669,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30669,out){
return (function (state_30644){
var state_val_30645 = (state_30644[(1)]);
if((state_val_30645 === (7))){
var inst_30640 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30646_30670 = state_30644__$1;
(statearr_30646_30670[(2)] = inst_30640);

(statearr_30646_30670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (1))){
var state_30644__$1 = state_30644;
var statearr_30647_30671 = state_30644__$1;
(statearr_30647_30671[(2)] = null);

(statearr_30647_30671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (4))){
var inst_30626 = (state_30644[(7)]);
var inst_30626__$1 = (state_30644[(2)]);
var inst_30627 = (inst_30626__$1 == null);
var state_30644__$1 = (function (){var statearr_30648 = state_30644;
(statearr_30648[(7)] = inst_30626__$1);

return statearr_30648;
})();
if(cljs.core.truth_(inst_30627)){
var statearr_30649_30672 = state_30644__$1;
(statearr_30649_30672[(1)] = (5));

} else {
var statearr_30650_30673 = state_30644__$1;
(statearr_30650_30673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (6))){
var inst_30626 = (state_30644[(7)]);
var inst_30631 = p.call(null,inst_30626);
var state_30644__$1 = state_30644;
if(cljs.core.truth_(inst_30631)){
var statearr_30651_30674 = state_30644__$1;
(statearr_30651_30674[(1)] = (8));

} else {
var statearr_30652_30675 = state_30644__$1;
(statearr_30652_30675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (3))){
var inst_30642 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30644__$1,inst_30642);
} else {
if((state_val_30645 === (2))){
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30644__$1,(4),ch);
} else {
if((state_val_30645 === (11))){
var inst_30634 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30653_30676 = state_30644__$1;
(statearr_30653_30676[(2)] = inst_30634);

(statearr_30653_30676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (9))){
var state_30644__$1 = state_30644;
var statearr_30654_30677 = state_30644__$1;
(statearr_30654_30677[(2)] = null);

(statearr_30654_30677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (5))){
var inst_30629 = cljs.core.async.close_BANG_.call(null,out);
var state_30644__$1 = state_30644;
var statearr_30655_30678 = state_30644__$1;
(statearr_30655_30678[(2)] = inst_30629);

(statearr_30655_30678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (10))){
var inst_30637 = (state_30644[(2)]);
var state_30644__$1 = (function (){var statearr_30656 = state_30644;
(statearr_30656[(8)] = inst_30637);

return statearr_30656;
})();
var statearr_30657_30679 = state_30644__$1;
(statearr_30657_30679[(2)] = null);

(statearr_30657_30679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (8))){
var inst_30626 = (state_30644[(7)]);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30644__$1,(11),out,inst_30626);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30669,out))
;
return ((function (switch__28285__auto__,c__28397__auto___30669,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30661 = [null,null,null,null,null,null,null,null,null];
(statearr_30661[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30661[(1)] = (1));

return statearr_30661;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30644){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30662){if((e30662 instanceof Object)){
var ex__28289__auto__ = e30662;
var statearr_30663_30680 = state_30644;
(statearr_30663_30680[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30681 = state_30644;
state_30644 = G__30681;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30669,out))
})();
var state__28399__auto__ = (function (){var statearr_30664 = f__28398__auto__.call(null);
(statearr_30664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30669);

return statearr_30664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30669,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30682 = [];
var len__25847__auto___30685 = arguments.length;
var i__25848__auto___30686 = (0);
while(true){
if((i__25848__auto___30686 < len__25847__auto___30685)){
args30682.push((arguments[i__25848__auto___30686]));

var G__30687 = (i__25848__auto___30686 + (1));
i__25848__auto___30686 = G__30687;
continue;
} else {
}
break;
}

var G__30684 = args30682.length;
switch (G__30684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30682.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__){
return (function (state_30854){
var state_val_30855 = (state_30854[(1)]);
if((state_val_30855 === (7))){
var inst_30850 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30856_30897 = state_30854__$1;
(statearr_30856_30897[(2)] = inst_30850);

(statearr_30856_30897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (20))){
var inst_30820 = (state_30854[(7)]);
var inst_30831 = (state_30854[(2)]);
var inst_30832 = cljs.core.next.call(null,inst_30820);
var inst_30806 = inst_30832;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30854__$1 = (function (){var statearr_30857 = state_30854;
(statearr_30857[(8)] = inst_30808);

(statearr_30857[(9)] = inst_30806);

(statearr_30857[(10)] = inst_30831);

(statearr_30857[(11)] = inst_30807);

(statearr_30857[(12)] = inst_30809);

return statearr_30857;
})();
var statearr_30858_30898 = state_30854__$1;
(statearr_30858_30898[(2)] = null);

(statearr_30858_30898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (1))){
var state_30854__$1 = state_30854;
var statearr_30859_30899 = state_30854__$1;
(statearr_30859_30899[(2)] = null);

(statearr_30859_30899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (4))){
var inst_30795 = (state_30854[(13)]);
var inst_30795__$1 = (state_30854[(2)]);
var inst_30796 = (inst_30795__$1 == null);
var state_30854__$1 = (function (){var statearr_30860 = state_30854;
(statearr_30860[(13)] = inst_30795__$1);

return statearr_30860;
})();
if(cljs.core.truth_(inst_30796)){
var statearr_30861_30900 = state_30854__$1;
(statearr_30861_30900[(1)] = (5));

} else {
var statearr_30862_30901 = state_30854__$1;
(statearr_30862_30901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (15))){
var state_30854__$1 = state_30854;
var statearr_30866_30902 = state_30854__$1;
(statearr_30866_30902[(2)] = null);

(statearr_30866_30902[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (21))){
var state_30854__$1 = state_30854;
var statearr_30867_30903 = state_30854__$1;
(statearr_30867_30903[(2)] = null);

(statearr_30867_30903[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (13))){
var inst_30808 = (state_30854[(8)]);
var inst_30806 = (state_30854[(9)]);
var inst_30807 = (state_30854[(11)]);
var inst_30809 = (state_30854[(12)]);
var inst_30816 = (state_30854[(2)]);
var inst_30817 = (inst_30809 + (1));
var tmp30863 = inst_30808;
var tmp30864 = inst_30806;
var tmp30865 = inst_30807;
var inst_30806__$1 = tmp30864;
var inst_30807__$1 = tmp30865;
var inst_30808__$1 = tmp30863;
var inst_30809__$1 = inst_30817;
var state_30854__$1 = (function (){var statearr_30868 = state_30854;
(statearr_30868[(8)] = inst_30808__$1);

(statearr_30868[(14)] = inst_30816);

(statearr_30868[(9)] = inst_30806__$1);

(statearr_30868[(11)] = inst_30807__$1);

(statearr_30868[(12)] = inst_30809__$1);

return statearr_30868;
})();
var statearr_30869_30904 = state_30854__$1;
(statearr_30869_30904[(2)] = null);

(statearr_30869_30904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (22))){
var state_30854__$1 = state_30854;
var statearr_30870_30905 = state_30854__$1;
(statearr_30870_30905[(2)] = null);

(statearr_30870_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (6))){
var inst_30795 = (state_30854[(13)]);
var inst_30804 = f.call(null,inst_30795);
var inst_30805 = cljs.core.seq.call(null,inst_30804);
var inst_30806 = inst_30805;
var inst_30807 = null;
var inst_30808 = (0);
var inst_30809 = (0);
var state_30854__$1 = (function (){var statearr_30871 = state_30854;
(statearr_30871[(8)] = inst_30808);

(statearr_30871[(9)] = inst_30806);

(statearr_30871[(11)] = inst_30807);

(statearr_30871[(12)] = inst_30809);

return statearr_30871;
})();
var statearr_30872_30906 = state_30854__$1;
(statearr_30872_30906[(2)] = null);

(statearr_30872_30906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (17))){
var inst_30820 = (state_30854[(7)]);
var inst_30824 = cljs.core.chunk_first.call(null,inst_30820);
var inst_30825 = cljs.core.chunk_rest.call(null,inst_30820);
var inst_30826 = cljs.core.count.call(null,inst_30824);
var inst_30806 = inst_30825;
var inst_30807 = inst_30824;
var inst_30808 = inst_30826;
var inst_30809 = (0);
var state_30854__$1 = (function (){var statearr_30873 = state_30854;
(statearr_30873[(8)] = inst_30808);

(statearr_30873[(9)] = inst_30806);

(statearr_30873[(11)] = inst_30807);

(statearr_30873[(12)] = inst_30809);

return statearr_30873;
})();
var statearr_30874_30907 = state_30854__$1;
(statearr_30874_30907[(2)] = null);

(statearr_30874_30907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (3))){
var inst_30852 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30854__$1,inst_30852);
} else {
if((state_val_30855 === (12))){
var inst_30840 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30875_30908 = state_30854__$1;
(statearr_30875_30908[(2)] = inst_30840);

(statearr_30875_30908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (2))){
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30854__$1,(4),in$);
} else {
if((state_val_30855 === (23))){
var inst_30848 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30876_30909 = state_30854__$1;
(statearr_30876_30909[(2)] = inst_30848);

(statearr_30876_30909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (19))){
var inst_30835 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30877_30910 = state_30854__$1;
(statearr_30877_30910[(2)] = inst_30835);

(statearr_30877_30910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (11))){
var inst_30806 = (state_30854[(9)]);
var inst_30820 = (state_30854[(7)]);
var inst_30820__$1 = cljs.core.seq.call(null,inst_30806);
var state_30854__$1 = (function (){var statearr_30878 = state_30854;
(statearr_30878[(7)] = inst_30820__$1);

return statearr_30878;
})();
if(inst_30820__$1){
var statearr_30879_30911 = state_30854__$1;
(statearr_30879_30911[(1)] = (14));

} else {
var statearr_30880_30912 = state_30854__$1;
(statearr_30880_30912[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (9))){
var inst_30842 = (state_30854[(2)]);
var inst_30843 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30854__$1 = (function (){var statearr_30881 = state_30854;
(statearr_30881[(15)] = inst_30842);

return statearr_30881;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_30882_30913 = state_30854__$1;
(statearr_30882_30913[(1)] = (21));

} else {
var statearr_30883_30914 = state_30854__$1;
(statearr_30883_30914[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (5))){
var inst_30798 = cljs.core.async.close_BANG_.call(null,out);
var state_30854__$1 = state_30854;
var statearr_30884_30915 = state_30854__$1;
(statearr_30884_30915[(2)] = inst_30798);

(statearr_30884_30915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (14))){
var inst_30820 = (state_30854[(7)]);
var inst_30822 = cljs.core.chunked_seq_QMARK_.call(null,inst_30820);
var state_30854__$1 = state_30854;
if(inst_30822){
var statearr_30885_30916 = state_30854__$1;
(statearr_30885_30916[(1)] = (17));

} else {
var statearr_30886_30917 = state_30854__$1;
(statearr_30886_30917[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (16))){
var inst_30838 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30887_30918 = state_30854__$1;
(statearr_30887_30918[(2)] = inst_30838);

(statearr_30887_30918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (10))){
var inst_30807 = (state_30854[(11)]);
var inst_30809 = (state_30854[(12)]);
var inst_30814 = cljs.core._nth.call(null,inst_30807,inst_30809);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30854__$1,(13),out,inst_30814);
} else {
if((state_val_30855 === (18))){
var inst_30820 = (state_30854[(7)]);
var inst_30829 = cljs.core.first.call(null,inst_30820);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30854__$1,(20),out,inst_30829);
} else {
if((state_val_30855 === (8))){
var inst_30808 = (state_30854[(8)]);
var inst_30809 = (state_30854[(12)]);
var inst_30811 = (inst_30809 < inst_30808);
var inst_30812 = inst_30811;
var state_30854__$1 = state_30854;
if(cljs.core.truth_(inst_30812)){
var statearr_30888_30919 = state_30854__$1;
(statearr_30888_30919[(1)] = (10));

} else {
var statearr_30889_30920 = state_30854__$1;
(statearr_30889_30920[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_30893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30893[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__);

(statearr_30893[(1)] = (1));

return statearr_30893;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1 = (function (state_30854){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30894){if((e30894 instanceof Object)){
var ex__28289__auto__ = e30894;
var statearr_30895_30921 = state_30854;
(statearr_30895_30921[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30922 = state_30854;
state_30854 = G__30922;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__ = function(state_30854){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1.call(this,state_30854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__))
})();
var state__28399__auto__ = (function (){var statearr_30896 = f__28398__auto__.call(null);
(statearr_30896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_30896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__))
);

return c__28397__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30923 = [];
var len__25847__auto___30926 = arguments.length;
var i__25848__auto___30927 = (0);
while(true){
if((i__25848__auto___30927 < len__25847__auto___30926)){
args30923.push((arguments[i__25848__auto___30927]));

var G__30928 = (i__25848__auto___30927 + (1));
i__25848__auto___30927 = G__30928;
continue;
} else {
}
break;
}

var G__30925 = args30923.length;
switch (G__30925) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30923.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30930 = [];
var len__25847__auto___30933 = arguments.length;
var i__25848__auto___30934 = (0);
while(true){
if((i__25848__auto___30934 < len__25847__auto___30933)){
args30930.push((arguments[i__25848__auto___30934]));

var G__30935 = (i__25848__auto___30934 + (1));
i__25848__auto___30934 = G__30935;
continue;
} else {
}
break;
}

var G__30932 = args30930.length;
switch (G__30932) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30930.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30937 = [];
var len__25847__auto___30988 = arguments.length;
var i__25848__auto___30989 = (0);
while(true){
if((i__25848__auto___30989 < len__25847__auto___30988)){
args30937.push((arguments[i__25848__auto___30989]));

var G__30990 = (i__25848__auto___30989 + (1));
i__25848__auto___30989 = G__30990;
continue;
} else {
}
break;
}

var G__30939 = args30937.length;
switch (G__30939) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30937.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___30992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___30992,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___30992,out){
return (function (state_30963){
var state_val_30964 = (state_30963[(1)]);
if((state_val_30964 === (7))){
var inst_30958 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_30965_30993 = state_30963__$1;
(statearr_30965_30993[(2)] = inst_30958);

(statearr_30965_30993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (1))){
var inst_30940 = null;
var state_30963__$1 = (function (){var statearr_30966 = state_30963;
(statearr_30966[(7)] = inst_30940);

return statearr_30966;
})();
var statearr_30967_30994 = state_30963__$1;
(statearr_30967_30994[(2)] = null);

(statearr_30967_30994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (4))){
var inst_30943 = (state_30963[(8)]);
var inst_30943__$1 = (state_30963[(2)]);
var inst_30944 = (inst_30943__$1 == null);
var inst_30945 = cljs.core.not.call(null,inst_30944);
var state_30963__$1 = (function (){var statearr_30968 = state_30963;
(statearr_30968[(8)] = inst_30943__$1);

return statearr_30968;
})();
if(inst_30945){
var statearr_30969_30995 = state_30963__$1;
(statearr_30969_30995[(1)] = (5));

} else {
var statearr_30970_30996 = state_30963__$1;
(statearr_30970_30996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (6))){
var state_30963__$1 = state_30963;
var statearr_30971_30997 = state_30963__$1;
(statearr_30971_30997[(2)] = null);

(statearr_30971_30997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (3))){
var inst_30960 = (state_30963[(2)]);
var inst_30961 = cljs.core.async.close_BANG_.call(null,out);
var state_30963__$1 = (function (){var statearr_30972 = state_30963;
(statearr_30972[(9)] = inst_30960);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30963__$1,inst_30961);
} else {
if((state_val_30964 === (2))){
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30963__$1,(4),ch);
} else {
if((state_val_30964 === (11))){
var inst_30943 = (state_30963[(8)]);
var inst_30952 = (state_30963[(2)]);
var inst_30940 = inst_30943;
var state_30963__$1 = (function (){var statearr_30973 = state_30963;
(statearr_30973[(10)] = inst_30952);

(statearr_30973[(7)] = inst_30940);

return statearr_30973;
})();
var statearr_30974_30998 = state_30963__$1;
(statearr_30974_30998[(2)] = null);

(statearr_30974_30998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (9))){
var inst_30943 = (state_30963[(8)]);
var state_30963__$1 = state_30963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30963__$1,(11),out,inst_30943);
} else {
if((state_val_30964 === (5))){
var inst_30943 = (state_30963[(8)]);
var inst_30940 = (state_30963[(7)]);
var inst_30947 = cljs.core._EQ_.call(null,inst_30943,inst_30940);
var state_30963__$1 = state_30963;
if(inst_30947){
var statearr_30976_30999 = state_30963__$1;
(statearr_30976_30999[(1)] = (8));

} else {
var statearr_30977_31000 = state_30963__$1;
(statearr_30977_31000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (10))){
var inst_30955 = (state_30963[(2)]);
var state_30963__$1 = state_30963;
var statearr_30978_31001 = state_30963__$1;
(statearr_30978_31001[(2)] = inst_30955);

(statearr_30978_31001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30964 === (8))){
var inst_30940 = (state_30963[(7)]);
var tmp30975 = inst_30940;
var inst_30940__$1 = tmp30975;
var state_30963__$1 = (function (){var statearr_30979 = state_30963;
(statearr_30979[(7)] = inst_30940__$1);

return statearr_30979;
})();
var statearr_30980_31002 = state_30963__$1;
(statearr_30980_31002[(2)] = null);

(statearr_30980_31002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___30992,out))
;
return ((function (switch__28285__auto__,c__28397__auto___30992,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_30963){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_30963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30985){if((e30985 instanceof Object)){
var ex__28289__auto__ = e30985;
var statearr_30986_31003 = state_30963;
(statearr_30986_31003[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31004 = state_30963;
state_30963 = G__31004;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_30963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_30963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___30992,out))
})();
var state__28399__auto__ = (function (){var statearr_30987 = f__28398__auto__.call(null);
(statearr_30987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___30992);

return statearr_30987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___30992,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31005 = [];
var len__25847__auto___31075 = arguments.length;
var i__25848__auto___31076 = (0);
while(true){
if((i__25848__auto___31076 < len__25847__auto___31075)){
args31005.push((arguments[i__25848__auto___31076]));

var G__31077 = (i__25848__auto___31076 + (1));
i__25848__auto___31076 = G__31077;
continue;
} else {
}
break;
}

var G__31007 = args31005.length;
switch (G__31007) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31005.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___31079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___31079,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___31079,out){
return (function (state_31045){
var state_val_31046 = (state_31045[(1)]);
if((state_val_31046 === (7))){
var inst_31041 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31047_31080 = state_31045__$1;
(statearr_31047_31080[(2)] = inst_31041);

(statearr_31047_31080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (1))){
var inst_31008 = (new Array(n));
var inst_31009 = inst_31008;
var inst_31010 = (0);
var state_31045__$1 = (function (){var statearr_31048 = state_31045;
(statearr_31048[(7)] = inst_31010);

(statearr_31048[(8)] = inst_31009);

return statearr_31048;
})();
var statearr_31049_31081 = state_31045__$1;
(statearr_31049_31081[(2)] = null);

(statearr_31049_31081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (4))){
var inst_31013 = (state_31045[(9)]);
var inst_31013__$1 = (state_31045[(2)]);
var inst_31014 = (inst_31013__$1 == null);
var inst_31015 = cljs.core.not.call(null,inst_31014);
var state_31045__$1 = (function (){var statearr_31050 = state_31045;
(statearr_31050[(9)] = inst_31013__$1);

return statearr_31050;
})();
if(inst_31015){
var statearr_31051_31082 = state_31045__$1;
(statearr_31051_31082[(1)] = (5));

} else {
var statearr_31052_31083 = state_31045__$1;
(statearr_31052_31083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (15))){
var inst_31035 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31053_31084 = state_31045__$1;
(statearr_31053_31084[(2)] = inst_31035);

(statearr_31053_31084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (13))){
var state_31045__$1 = state_31045;
var statearr_31054_31085 = state_31045__$1;
(statearr_31054_31085[(2)] = null);

(statearr_31054_31085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (6))){
var inst_31010 = (state_31045[(7)]);
var inst_31031 = (inst_31010 > (0));
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_31031)){
var statearr_31055_31086 = state_31045__$1;
(statearr_31055_31086[(1)] = (12));

} else {
var statearr_31056_31087 = state_31045__$1;
(statearr_31056_31087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (3))){
var inst_31043 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31045__$1,inst_31043);
} else {
if((state_val_31046 === (12))){
var inst_31009 = (state_31045[(8)]);
var inst_31033 = cljs.core.vec.call(null,inst_31009);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31045__$1,(15),out,inst_31033);
} else {
if((state_val_31046 === (2))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31045__$1,(4),ch);
} else {
if((state_val_31046 === (11))){
var inst_31025 = (state_31045[(2)]);
var inst_31026 = (new Array(n));
var inst_31009 = inst_31026;
var inst_31010 = (0);
var state_31045__$1 = (function (){var statearr_31057 = state_31045;
(statearr_31057[(7)] = inst_31010);

(statearr_31057[(10)] = inst_31025);

(statearr_31057[(8)] = inst_31009);

return statearr_31057;
})();
var statearr_31058_31088 = state_31045__$1;
(statearr_31058_31088[(2)] = null);

(statearr_31058_31088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (9))){
var inst_31009 = (state_31045[(8)]);
var inst_31023 = cljs.core.vec.call(null,inst_31009);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31045__$1,(11),out,inst_31023);
} else {
if((state_val_31046 === (5))){
var inst_31018 = (state_31045[(11)]);
var inst_31010 = (state_31045[(7)]);
var inst_31013 = (state_31045[(9)]);
var inst_31009 = (state_31045[(8)]);
var inst_31017 = (inst_31009[inst_31010] = inst_31013);
var inst_31018__$1 = (inst_31010 + (1));
var inst_31019 = (inst_31018__$1 < n);
var state_31045__$1 = (function (){var statearr_31059 = state_31045;
(statearr_31059[(12)] = inst_31017);

(statearr_31059[(11)] = inst_31018__$1);

return statearr_31059;
})();
if(cljs.core.truth_(inst_31019)){
var statearr_31060_31089 = state_31045__$1;
(statearr_31060_31089[(1)] = (8));

} else {
var statearr_31061_31090 = state_31045__$1;
(statearr_31061_31090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (14))){
var inst_31038 = (state_31045[(2)]);
var inst_31039 = cljs.core.async.close_BANG_.call(null,out);
var state_31045__$1 = (function (){var statearr_31063 = state_31045;
(statearr_31063[(13)] = inst_31038);

return statearr_31063;
})();
var statearr_31064_31091 = state_31045__$1;
(statearr_31064_31091[(2)] = inst_31039);

(statearr_31064_31091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (10))){
var inst_31029 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31065_31092 = state_31045__$1;
(statearr_31065_31092[(2)] = inst_31029);

(statearr_31065_31092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (8))){
var inst_31018 = (state_31045[(11)]);
var inst_31009 = (state_31045[(8)]);
var tmp31062 = inst_31009;
var inst_31009__$1 = tmp31062;
var inst_31010 = inst_31018;
var state_31045__$1 = (function (){var statearr_31066 = state_31045;
(statearr_31066[(7)] = inst_31010);

(statearr_31066[(8)] = inst_31009__$1);

return statearr_31066;
})();
var statearr_31067_31093 = state_31045__$1;
(statearr_31067_31093[(2)] = null);

(statearr_31067_31093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___31079,out))
;
return ((function (switch__28285__auto__,c__28397__auto___31079,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31071[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31071[(1)] = (1));

return statearr_31071;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31045){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_31045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31072){if((e31072 instanceof Object)){
var ex__28289__auto__ = e31072;
var statearr_31073_31094 = state_31045;
(statearr_31073_31094[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31095 = state_31045;
state_31045 = G__31095;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___31079,out))
})();
var state__28399__auto__ = (function (){var statearr_31074 = f__28398__auto__.call(null);
(statearr_31074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___31079);

return statearr_31074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___31079,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31096 = [];
var len__25847__auto___31170 = arguments.length;
var i__25848__auto___31171 = (0);
while(true){
if((i__25848__auto___31171 < len__25847__auto___31170)){
args31096.push((arguments[i__25848__auto___31171]));

var G__31172 = (i__25848__auto___31171 + (1));
i__25848__auto___31171 = G__31172;
continue;
} else {
}
break;
}

var G__31098 = args31096.length;
switch (G__31098) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31096.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28397__auto___31174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___31174,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___31174,out){
return (function (state_31140){
var state_val_31141 = (state_31140[(1)]);
if((state_val_31141 === (7))){
var inst_31136 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31142_31175 = state_31140__$1;
(statearr_31142_31175[(2)] = inst_31136);

(statearr_31142_31175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (1))){
var inst_31099 = [];
var inst_31100 = inst_31099;
var inst_31101 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31140__$1 = (function (){var statearr_31143 = state_31140;
(statearr_31143[(7)] = inst_31101);

(statearr_31143[(8)] = inst_31100);

return statearr_31143;
})();
var statearr_31144_31176 = state_31140__$1;
(statearr_31144_31176[(2)] = null);

(statearr_31144_31176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (4))){
var inst_31104 = (state_31140[(9)]);
var inst_31104__$1 = (state_31140[(2)]);
var inst_31105 = (inst_31104__$1 == null);
var inst_31106 = cljs.core.not.call(null,inst_31105);
var state_31140__$1 = (function (){var statearr_31145 = state_31140;
(statearr_31145[(9)] = inst_31104__$1);

return statearr_31145;
})();
if(inst_31106){
var statearr_31146_31177 = state_31140__$1;
(statearr_31146_31177[(1)] = (5));

} else {
var statearr_31147_31178 = state_31140__$1;
(statearr_31147_31178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (15))){
var inst_31130 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31148_31179 = state_31140__$1;
(statearr_31148_31179[(2)] = inst_31130);

(statearr_31148_31179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (13))){
var state_31140__$1 = state_31140;
var statearr_31149_31180 = state_31140__$1;
(statearr_31149_31180[(2)] = null);

(statearr_31149_31180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (6))){
var inst_31100 = (state_31140[(8)]);
var inst_31125 = inst_31100.length;
var inst_31126 = (inst_31125 > (0));
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31126)){
var statearr_31150_31181 = state_31140__$1;
(statearr_31150_31181[(1)] = (12));

} else {
var statearr_31151_31182 = state_31140__$1;
(statearr_31151_31182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (3))){
var inst_31138 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else {
if((state_val_31141 === (12))){
var inst_31100 = (state_31140[(8)]);
var inst_31128 = cljs.core.vec.call(null,inst_31100);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31140__$1,(15),out,inst_31128);
} else {
if((state_val_31141 === (2))){
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31140__$1,(4),ch);
} else {
if((state_val_31141 === (11))){
var inst_31104 = (state_31140[(9)]);
var inst_31108 = (state_31140[(10)]);
var inst_31118 = (state_31140[(2)]);
var inst_31119 = [];
var inst_31120 = inst_31119.push(inst_31104);
var inst_31100 = inst_31119;
var inst_31101 = inst_31108;
var state_31140__$1 = (function (){var statearr_31152 = state_31140;
(statearr_31152[(11)] = inst_31118);

(statearr_31152[(7)] = inst_31101);

(statearr_31152[(12)] = inst_31120);

(statearr_31152[(8)] = inst_31100);

return statearr_31152;
})();
var statearr_31153_31183 = state_31140__$1;
(statearr_31153_31183[(2)] = null);

(statearr_31153_31183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (9))){
var inst_31100 = (state_31140[(8)]);
var inst_31116 = cljs.core.vec.call(null,inst_31100);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31140__$1,(11),out,inst_31116);
} else {
if((state_val_31141 === (5))){
var inst_31104 = (state_31140[(9)]);
var inst_31101 = (state_31140[(7)]);
var inst_31108 = (state_31140[(10)]);
var inst_31108__$1 = f.call(null,inst_31104);
var inst_31109 = cljs.core._EQ_.call(null,inst_31108__$1,inst_31101);
var inst_31110 = cljs.core.keyword_identical_QMARK_.call(null,inst_31101,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31111 = (inst_31109) || (inst_31110);
var state_31140__$1 = (function (){var statearr_31154 = state_31140;
(statearr_31154[(10)] = inst_31108__$1);

return statearr_31154;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31155_31184 = state_31140__$1;
(statearr_31155_31184[(1)] = (8));

} else {
var statearr_31156_31185 = state_31140__$1;
(statearr_31156_31185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (14))){
var inst_31133 = (state_31140[(2)]);
var inst_31134 = cljs.core.async.close_BANG_.call(null,out);
var state_31140__$1 = (function (){var statearr_31158 = state_31140;
(statearr_31158[(13)] = inst_31133);

return statearr_31158;
})();
var statearr_31159_31186 = state_31140__$1;
(statearr_31159_31186[(2)] = inst_31134);

(statearr_31159_31186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (10))){
var inst_31123 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31160_31187 = state_31140__$1;
(statearr_31160_31187[(2)] = inst_31123);

(statearr_31160_31187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (8))){
var inst_31104 = (state_31140[(9)]);
var inst_31100 = (state_31140[(8)]);
var inst_31108 = (state_31140[(10)]);
var inst_31113 = inst_31100.push(inst_31104);
var tmp31157 = inst_31100;
var inst_31100__$1 = tmp31157;
var inst_31101 = inst_31108;
var state_31140__$1 = (function (){var statearr_31161 = state_31140;
(statearr_31161[(7)] = inst_31101);

(statearr_31161[(8)] = inst_31100__$1);

(statearr_31161[(14)] = inst_31113);

return statearr_31161;
})();
var statearr_31162_31188 = state_31140__$1;
(statearr_31162_31188[(2)] = null);

(statearr_31162_31188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28397__auto___31174,out))
;
return ((function (switch__28285__auto__,c__28397__auto___31174,out){
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31166[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31166[(1)] = (1));

return statearr_31166;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31140){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_31140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31167){if((e31167 instanceof Object)){
var ex__28289__auto__ = e31167;
var statearr_31168_31189 = state_31140;
(statearr_31168_31189[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31140;
state_31140 = G__31190;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___31174,out))
})();
var state__28399__auto__ = (function (){var statearr_31169 = f__28398__auto__.call(null);
(statearr_31169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___31174);

return statearr_31169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___31174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506684304585