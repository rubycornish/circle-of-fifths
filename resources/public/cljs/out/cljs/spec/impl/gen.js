// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25378__auto__,writer__25379__auto__,opt__25380__auto__){
return cljs.core._write.call(null,writer__25379__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32431 = arguments.length;
var i__25848__auto___32432 = (0);
while(true){
if((i__25848__auto___32432 < len__25847__auto___32431)){
args__25854__auto__.push((arguments[i__25848__auto___32432]));

var G__32433 = (i__25848__auto___32432 + (1));
i__25848__auto___32432 = G__32433;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32430){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32430));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32435 = arguments.length;
var i__25848__auto___32436 = (0);
while(true){
if((i__25848__auto___32436 < len__25847__auto___32435)){
args__25854__auto__.push((arguments[i__25848__auto___32436]));

var G__32437 = (i__25848__auto___32436 + (1));
i__25848__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32434){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32434));
});

var g_QMARK__32438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32439 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32438){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32438))
,null));
var mkg_32440 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32438,g_32439){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32438,g_32439))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32438,g_32439,mkg_32440){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32438).call(null,x);
});})(g_QMARK__32438,g_32439,mkg_32440))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32438,g_32439,mkg_32440){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32440).call(null,gfn);
});})(g_QMARK__32438,g_32439,mkg_32440))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32438,g_32439,mkg_32440){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32439).call(null,generator);
});})(g_QMARK__32438,g_32439,mkg_32440))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32402__auto___32459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32402__auto___32459){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32460 = arguments.length;
var i__25848__auto___32461 = (0);
while(true){
if((i__25848__auto___32461 < len__25847__auto___32460)){
args__25854__auto__.push((arguments[i__25848__auto___32461]));

var G__32462 = (i__25848__auto___32461 + (1));
i__25848__auto___32461 = G__32462;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32459))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32459),args);
});})(g__32402__auto___32459))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32402__auto___32459){
return (function (seq32441){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32441));
});})(g__32402__auto___32459))
;


var g__32402__auto___32463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32402__auto___32463){
return (function cljs$spec$impl$gen$list(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32464 = arguments.length;
var i__25848__auto___32465 = (0);
while(true){
if((i__25848__auto___32465 < len__25847__auto___32464)){
args__25854__auto__.push((arguments[i__25848__auto___32465]));

var G__32466 = (i__25848__auto___32465 + (1));
i__25848__auto___32465 = G__32466;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32463))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32463),args);
});})(g__32402__auto___32463))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32402__auto___32463){
return (function (seq32442){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32442));
});})(g__32402__auto___32463))
;


var g__32402__auto___32467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32402__auto___32467){
return (function cljs$spec$impl$gen$map(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32468 = arguments.length;
var i__25848__auto___32469 = (0);
while(true){
if((i__25848__auto___32469 < len__25847__auto___32468)){
args__25854__auto__.push((arguments[i__25848__auto___32469]));

var G__32470 = (i__25848__auto___32469 + (1));
i__25848__auto___32469 = G__32470;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32467))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32467),args);
});})(g__32402__auto___32467))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32402__auto___32467){
return (function (seq32443){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32443));
});})(g__32402__auto___32467))
;


var g__32402__auto___32471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32402__auto___32471){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32472 = arguments.length;
var i__25848__auto___32473 = (0);
while(true){
if((i__25848__auto___32473 < len__25847__auto___32472)){
args__25854__auto__.push((arguments[i__25848__auto___32473]));

var G__32474 = (i__25848__auto___32473 + (1));
i__25848__auto___32473 = G__32474;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32471))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32471),args);
});})(g__32402__auto___32471))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32402__auto___32471){
return (function (seq32444){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32444));
});})(g__32402__auto___32471))
;


var g__32402__auto___32475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32402__auto___32475){
return (function cljs$spec$impl$gen$set(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32476 = arguments.length;
var i__25848__auto___32477 = (0);
while(true){
if((i__25848__auto___32477 < len__25847__auto___32476)){
args__25854__auto__.push((arguments[i__25848__auto___32477]));

var G__32478 = (i__25848__auto___32477 + (1));
i__25848__auto___32477 = G__32478;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32475))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32475),args);
});})(g__32402__auto___32475))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32402__auto___32475){
return (function (seq32445){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32445));
});})(g__32402__auto___32475))
;


var g__32402__auto___32479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32402__auto___32479){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32480 = arguments.length;
var i__25848__auto___32481 = (0);
while(true){
if((i__25848__auto___32481 < len__25847__auto___32480)){
args__25854__auto__.push((arguments[i__25848__auto___32481]));

var G__32482 = (i__25848__auto___32481 + (1));
i__25848__auto___32481 = G__32482;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32479))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32479),args);
});})(g__32402__auto___32479))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32402__auto___32479){
return (function (seq32446){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32446));
});})(g__32402__auto___32479))
;


var g__32402__auto___32483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32402__auto___32483){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32484 = arguments.length;
var i__25848__auto___32485 = (0);
while(true){
if((i__25848__auto___32485 < len__25847__auto___32484)){
args__25854__auto__.push((arguments[i__25848__auto___32485]));

var G__32486 = (i__25848__auto___32485 + (1));
i__25848__auto___32485 = G__32486;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32483))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32483),args);
});})(g__32402__auto___32483))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32402__auto___32483){
return (function (seq32447){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32447));
});})(g__32402__auto___32483))
;


var g__32402__auto___32487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32402__auto___32487){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32488 = arguments.length;
var i__25848__auto___32489 = (0);
while(true){
if((i__25848__auto___32489 < len__25847__auto___32488)){
args__25854__auto__.push((arguments[i__25848__auto___32489]));

var G__32490 = (i__25848__auto___32489 + (1));
i__25848__auto___32489 = G__32490;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32487))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32487),args);
});})(g__32402__auto___32487))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32402__auto___32487){
return (function (seq32448){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32448));
});})(g__32402__auto___32487))
;


var g__32402__auto___32491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32402__auto___32491){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32492 = arguments.length;
var i__25848__auto___32493 = (0);
while(true){
if((i__25848__auto___32493 < len__25847__auto___32492)){
args__25854__auto__.push((arguments[i__25848__auto___32493]));

var G__32494 = (i__25848__auto___32493 + (1));
i__25848__auto___32493 = G__32494;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32491))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32491),args);
});})(g__32402__auto___32491))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32402__auto___32491){
return (function (seq32449){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32449));
});})(g__32402__auto___32491))
;


var g__32402__auto___32495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32402__auto___32495){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32496 = arguments.length;
var i__25848__auto___32497 = (0);
while(true){
if((i__25848__auto___32497 < len__25847__auto___32496)){
args__25854__auto__.push((arguments[i__25848__auto___32497]));

var G__32498 = (i__25848__auto___32497 + (1));
i__25848__auto___32497 = G__32498;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32495))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32495),args);
});})(g__32402__auto___32495))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32402__auto___32495){
return (function (seq32450){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32450));
});})(g__32402__auto___32495))
;


var g__32402__auto___32499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32402__auto___32499){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32500 = arguments.length;
var i__25848__auto___32501 = (0);
while(true){
if((i__25848__auto___32501 < len__25847__auto___32500)){
args__25854__auto__.push((arguments[i__25848__auto___32501]));

var G__32502 = (i__25848__auto___32501 + (1));
i__25848__auto___32501 = G__32502;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32499))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32499),args);
});})(g__32402__auto___32499))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32402__auto___32499){
return (function (seq32451){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32451));
});})(g__32402__auto___32499))
;


var g__32402__auto___32503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32402__auto___32503){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32504 = arguments.length;
var i__25848__auto___32505 = (0);
while(true){
if((i__25848__auto___32505 < len__25847__auto___32504)){
args__25854__auto__.push((arguments[i__25848__auto___32505]));

var G__32506 = (i__25848__auto___32505 + (1));
i__25848__auto___32505 = G__32506;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32503))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32503),args);
});})(g__32402__auto___32503))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32402__auto___32503){
return (function (seq32452){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32452));
});})(g__32402__auto___32503))
;


var g__32402__auto___32507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32402__auto___32507){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32508 = arguments.length;
var i__25848__auto___32509 = (0);
while(true){
if((i__25848__auto___32509 < len__25847__auto___32508)){
args__25854__auto__.push((arguments[i__25848__auto___32509]));

var G__32510 = (i__25848__auto___32509 + (1));
i__25848__auto___32509 = G__32510;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32507))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32507),args);
});})(g__32402__auto___32507))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32402__auto___32507){
return (function (seq32453){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32453));
});})(g__32402__auto___32507))
;


var g__32402__auto___32511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32402__auto___32511){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32512 = arguments.length;
var i__25848__auto___32513 = (0);
while(true){
if((i__25848__auto___32513 < len__25847__auto___32512)){
args__25854__auto__.push((arguments[i__25848__auto___32513]));

var G__32514 = (i__25848__auto___32513 + (1));
i__25848__auto___32513 = G__32514;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32511))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32511),args);
});})(g__32402__auto___32511))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32402__auto___32511){
return (function (seq32454){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32454));
});})(g__32402__auto___32511))
;


var g__32402__auto___32515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32402__auto___32515){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32516 = arguments.length;
var i__25848__auto___32517 = (0);
while(true){
if((i__25848__auto___32517 < len__25847__auto___32516)){
args__25854__auto__.push((arguments[i__25848__auto___32517]));

var G__32518 = (i__25848__auto___32517 + (1));
i__25848__auto___32517 = G__32518;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32515))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32515),args);
});})(g__32402__auto___32515))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32402__auto___32515){
return (function (seq32455){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32455));
});})(g__32402__auto___32515))
;


var g__32402__auto___32519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32402__auto___32519){
return (function cljs$spec$impl$gen$return(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32520 = arguments.length;
var i__25848__auto___32521 = (0);
while(true){
if((i__25848__auto___32521 < len__25847__auto___32520)){
args__25854__auto__.push((arguments[i__25848__auto___32521]));

var G__32522 = (i__25848__auto___32521 + (1));
i__25848__auto___32521 = G__32522;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32519))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32519),args);
});})(g__32402__auto___32519))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32402__auto___32519){
return (function (seq32456){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32456));
});})(g__32402__auto___32519))
;


var g__32402__auto___32523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32402__auto___32523){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32524 = arguments.length;
var i__25848__auto___32525 = (0);
while(true){
if((i__25848__auto___32525 < len__25847__auto___32524)){
args__25854__auto__.push((arguments[i__25848__auto___32525]));

var G__32526 = (i__25848__auto___32525 + (1));
i__25848__auto___32525 = G__32526;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32523))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32523),args);
});})(g__32402__auto___32523))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32402__auto___32523){
return (function (seq32457){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32457));
});})(g__32402__auto___32523))
;


var g__32402__auto___32527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32402__auto___32527){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32528 = arguments.length;
var i__25848__auto___32529 = (0);
while(true){
if((i__25848__auto___32529 < len__25847__auto___32528)){
args__25854__auto__.push((arguments[i__25848__auto___32529]));

var G__32530 = (i__25848__auto___32529 + (1));
i__25848__auto___32529 = G__32530;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32402__auto___32527))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32402__auto___32527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32402__auto___32527),args);
});})(g__32402__auto___32527))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32402__auto___32527){
return (function (seq32458){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32458));
});})(g__32402__auto___32527))
;

var g__32415__auto___32552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32415__auto___32552){
return (function cljs$spec$impl$gen$any(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32553 = arguments.length;
var i__25848__auto___32554 = (0);
while(true){
if((i__25848__auto___32554 < len__25847__auto___32553)){
args__25854__auto__.push((arguments[i__25848__auto___32554]));

var G__32555 = (i__25848__auto___32554 + (1));
i__25848__auto___32554 = G__32555;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32552))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32552){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32552);
});})(g__32415__auto___32552))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32415__auto___32552){
return (function (seq32531){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32531));
});})(g__32415__auto___32552))
;


var g__32415__auto___32556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32415__auto___32556){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32557 = arguments.length;
var i__25848__auto___32558 = (0);
while(true){
if((i__25848__auto___32558 < len__25847__auto___32557)){
args__25854__auto__.push((arguments[i__25848__auto___32558]));

var G__32559 = (i__25848__auto___32558 + (1));
i__25848__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32556))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32556){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32556);
});})(g__32415__auto___32556))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32415__auto___32556){
return (function (seq32532){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32532));
});})(g__32415__auto___32556))
;


var g__32415__auto___32560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32415__auto___32560){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32561 = arguments.length;
var i__25848__auto___32562 = (0);
while(true){
if((i__25848__auto___32562 < len__25847__auto___32561)){
args__25854__auto__.push((arguments[i__25848__auto___32562]));

var G__32563 = (i__25848__auto___32562 + (1));
i__25848__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32560))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32560){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32560);
});})(g__32415__auto___32560))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32415__auto___32560){
return (function (seq32533){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32533));
});})(g__32415__auto___32560))
;


var g__32415__auto___32564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32415__auto___32564){
return (function cljs$spec$impl$gen$char(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32565 = arguments.length;
var i__25848__auto___32566 = (0);
while(true){
if((i__25848__auto___32566 < len__25847__auto___32565)){
args__25854__auto__.push((arguments[i__25848__auto___32566]));

var G__32567 = (i__25848__auto___32566 + (1));
i__25848__auto___32566 = G__32567;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32564))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32564){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32564);
});})(g__32415__auto___32564))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32415__auto___32564){
return (function (seq32534){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32534));
});})(g__32415__auto___32564))
;


var g__32415__auto___32568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32415__auto___32568){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32569 = arguments.length;
var i__25848__auto___32570 = (0);
while(true){
if((i__25848__auto___32570 < len__25847__auto___32569)){
args__25854__auto__.push((arguments[i__25848__auto___32570]));

var G__32571 = (i__25848__auto___32570 + (1));
i__25848__auto___32570 = G__32571;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32568))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32568){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32568);
});})(g__32415__auto___32568))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32415__auto___32568){
return (function (seq32535){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32535));
});})(g__32415__auto___32568))
;


var g__32415__auto___32572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32415__auto___32572){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32573 = arguments.length;
var i__25848__auto___32574 = (0);
while(true){
if((i__25848__auto___32574 < len__25847__auto___32573)){
args__25854__auto__.push((arguments[i__25848__auto___32574]));

var G__32575 = (i__25848__auto___32574 + (1));
i__25848__auto___32574 = G__32575;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32572))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32572){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32572);
});})(g__32415__auto___32572))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32415__auto___32572){
return (function (seq32536){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32536));
});})(g__32415__auto___32572))
;


var g__32415__auto___32576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32415__auto___32576){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32577 = arguments.length;
var i__25848__auto___32578 = (0);
while(true){
if((i__25848__auto___32578 < len__25847__auto___32577)){
args__25854__auto__.push((arguments[i__25848__auto___32578]));

var G__32579 = (i__25848__auto___32578 + (1));
i__25848__auto___32578 = G__32579;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32576))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32576){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32576);
});})(g__32415__auto___32576))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32415__auto___32576){
return (function (seq32537){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32537));
});})(g__32415__auto___32576))
;


var g__32415__auto___32580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32415__auto___32580){
return (function cljs$spec$impl$gen$double(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32581 = arguments.length;
var i__25848__auto___32582 = (0);
while(true){
if((i__25848__auto___32582 < len__25847__auto___32581)){
args__25854__auto__.push((arguments[i__25848__auto___32582]));

var G__32583 = (i__25848__auto___32582 + (1));
i__25848__auto___32582 = G__32583;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32580))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32580){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32580);
});})(g__32415__auto___32580))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32415__auto___32580){
return (function (seq32538){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32538));
});})(g__32415__auto___32580))
;


var g__32415__auto___32584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32415__auto___32584){
return (function cljs$spec$impl$gen$int(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32585 = arguments.length;
var i__25848__auto___32586 = (0);
while(true){
if((i__25848__auto___32586 < len__25847__auto___32585)){
args__25854__auto__.push((arguments[i__25848__auto___32586]));

var G__32587 = (i__25848__auto___32586 + (1));
i__25848__auto___32586 = G__32587;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32584))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32584){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32584);
});})(g__32415__auto___32584))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32415__auto___32584){
return (function (seq32539){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32539));
});})(g__32415__auto___32584))
;


var g__32415__auto___32588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32415__auto___32588){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32589 = arguments.length;
var i__25848__auto___32590 = (0);
while(true){
if((i__25848__auto___32590 < len__25847__auto___32589)){
args__25854__auto__.push((arguments[i__25848__auto___32590]));

var G__32591 = (i__25848__auto___32590 + (1));
i__25848__auto___32590 = G__32591;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32588))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32588){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32588);
});})(g__32415__auto___32588))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32415__auto___32588){
return (function (seq32540){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32540));
});})(g__32415__auto___32588))
;


var g__32415__auto___32592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32415__auto___32592){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32593 = arguments.length;
var i__25848__auto___32594 = (0);
while(true){
if((i__25848__auto___32594 < len__25847__auto___32593)){
args__25854__auto__.push((arguments[i__25848__auto___32594]));

var G__32595 = (i__25848__auto___32594 + (1));
i__25848__auto___32594 = G__32595;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32592))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32592){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32592);
});})(g__32415__auto___32592))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32415__auto___32592){
return (function (seq32541){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32541));
});})(g__32415__auto___32592))
;


var g__32415__auto___32596 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32415__auto___32596){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32597 = arguments.length;
var i__25848__auto___32598 = (0);
while(true){
if((i__25848__auto___32598 < len__25847__auto___32597)){
args__25854__auto__.push((arguments[i__25848__auto___32598]));

var G__32599 = (i__25848__auto___32598 + (1));
i__25848__auto___32598 = G__32599;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32596))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32596){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32596);
});})(g__32415__auto___32596))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32415__auto___32596){
return (function (seq32542){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32542));
});})(g__32415__auto___32596))
;


var g__32415__auto___32600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32415__auto___32600){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32601 = arguments.length;
var i__25848__auto___32602 = (0);
while(true){
if((i__25848__auto___32602 < len__25847__auto___32601)){
args__25854__auto__.push((arguments[i__25848__auto___32602]));

var G__32603 = (i__25848__auto___32602 + (1));
i__25848__auto___32602 = G__32603;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32600))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32600){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32600);
});})(g__32415__auto___32600))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32415__auto___32600){
return (function (seq32543){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32543));
});})(g__32415__auto___32600))
;


var g__32415__auto___32604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32415__auto___32604){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32605 = arguments.length;
var i__25848__auto___32606 = (0);
while(true){
if((i__25848__auto___32606 < len__25847__auto___32605)){
args__25854__auto__.push((arguments[i__25848__auto___32606]));

var G__32607 = (i__25848__auto___32606 + (1));
i__25848__auto___32606 = G__32607;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32604))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32604){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32604);
});})(g__32415__auto___32604))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32415__auto___32604){
return (function (seq32544){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32544));
});})(g__32415__auto___32604))
;


var g__32415__auto___32608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32415__auto___32608){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32609 = arguments.length;
var i__25848__auto___32610 = (0);
while(true){
if((i__25848__auto___32610 < len__25847__auto___32609)){
args__25854__auto__.push((arguments[i__25848__auto___32610]));

var G__32611 = (i__25848__auto___32610 + (1));
i__25848__auto___32610 = G__32611;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32608))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32608){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32608);
});})(g__32415__auto___32608))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32415__auto___32608){
return (function (seq32545){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32545));
});})(g__32415__auto___32608))
;


var g__32415__auto___32612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32415__auto___32612){
return (function cljs$spec$impl$gen$string(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32613 = arguments.length;
var i__25848__auto___32614 = (0);
while(true){
if((i__25848__auto___32614 < len__25847__auto___32613)){
args__25854__auto__.push((arguments[i__25848__auto___32614]));

var G__32615 = (i__25848__auto___32614 + (1));
i__25848__auto___32614 = G__32615;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32612))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32612){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32612);
});})(g__32415__auto___32612))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32415__auto___32612){
return (function (seq32546){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32546));
});})(g__32415__auto___32612))
;


var g__32415__auto___32616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32415__auto___32616){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32617 = arguments.length;
var i__25848__auto___32618 = (0);
while(true){
if((i__25848__auto___32618 < len__25847__auto___32617)){
args__25854__auto__.push((arguments[i__25848__auto___32618]));

var G__32619 = (i__25848__auto___32618 + (1));
i__25848__auto___32618 = G__32619;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32616))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32616){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32616);
});})(g__32415__auto___32616))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32415__auto___32616){
return (function (seq32547){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32547));
});})(g__32415__auto___32616))
;


var g__32415__auto___32620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32415__auto___32620){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32621 = arguments.length;
var i__25848__auto___32622 = (0);
while(true){
if((i__25848__auto___32622 < len__25847__auto___32621)){
args__25854__auto__.push((arguments[i__25848__auto___32622]));

var G__32623 = (i__25848__auto___32622 + (1));
i__25848__auto___32622 = G__32623;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32620))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32620){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32620);
});})(g__32415__auto___32620))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32415__auto___32620){
return (function (seq32548){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32548));
});})(g__32415__auto___32620))
;


var g__32415__auto___32624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32415__auto___32624){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32625 = arguments.length;
var i__25848__auto___32626 = (0);
while(true){
if((i__25848__auto___32626 < len__25847__auto___32625)){
args__25854__auto__.push((arguments[i__25848__auto___32626]));

var G__32627 = (i__25848__auto___32626 + (1));
i__25848__auto___32626 = G__32627;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32624))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32624){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32624);
});})(g__32415__auto___32624))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32415__auto___32624){
return (function (seq32549){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32549));
});})(g__32415__auto___32624))
;


var g__32415__auto___32628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32415__auto___32628){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32629 = arguments.length;
var i__25848__auto___32630 = (0);
while(true){
if((i__25848__auto___32630 < len__25847__auto___32629)){
args__25854__auto__.push((arguments[i__25848__auto___32630]));

var G__32631 = (i__25848__auto___32630 + (1));
i__25848__auto___32630 = G__32631;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32628))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32628){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32628);
});})(g__32415__auto___32628))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32415__auto___32628){
return (function (seq32550){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32550));
});})(g__32415__auto___32628))
;


var g__32415__auto___32632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32415__auto___32632){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32633 = arguments.length;
var i__25848__auto___32634 = (0);
while(true){
if((i__25848__auto___32634 < len__25847__auto___32633)){
args__25854__auto__.push((arguments[i__25848__auto___32634]));

var G__32635 = (i__25848__auto___32634 + (1));
i__25848__auto___32634 = G__32635;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});})(g__32415__auto___32632))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32415__auto___32632){
return (function (args){
return cljs.core.deref.call(null,g__32415__auto___32632);
});})(g__32415__auto___32632))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32415__auto___32632){
return (function (seq32551){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32551));
});})(g__32415__auto___32632))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25854__auto__ = [];
var len__25847__auto___32638 = arguments.length;
var i__25848__auto___32639 = (0);
while(true){
if((i__25848__auto___32639 < len__25847__auto___32638)){
args__25854__auto__.push((arguments[i__25848__auto___32639]));

var G__32640 = (i__25848__auto___32639 + (1));
i__25848__auto___32639 = G__32640;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32636_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32636_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32637){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32637));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32641_SHARP_){
return (new Date(p1__32641_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1506684305686