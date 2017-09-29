// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24772__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24772__auto__){
return or__24772__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24772__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31325_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31325_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31330 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31331 = null;
var count__31332 = (0);
var i__31333 = (0);
while(true){
if((i__31333 < count__31332)){
var n = cljs.core._nth.call(null,chunk__31331,i__31333);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31334 = seq__31330;
var G__31335 = chunk__31331;
var G__31336 = count__31332;
var G__31337 = (i__31333 + (1));
seq__31330 = G__31334;
chunk__31331 = G__31335;
count__31332 = G__31336;
i__31333 = G__31337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31330);
if(temp__4657__auto__){
var seq__31330__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31330__$1)){
var c__25583__auto__ = cljs.core.chunk_first.call(null,seq__31330__$1);
var G__31338 = cljs.core.chunk_rest.call(null,seq__31330__$1);
var G__31339 = c__25583__auto__;
var G__31340 = cljs.core.count.call(null,c__25583__auto__);
var G__31341 = (0);
seq__31330 = G__31338;
chunk__31331 = G__31339;
count__31332 = G__31340;
i__31333 = G__31341;
continue;
} else {
var n = cljs.core.first.call(null,seq__31330__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31342 = cljs.core.next.call(null,seq__31330__$1);
var G__31343 = null;
var G__31344 = (0);
var G__31345 = (0);
seq__31330 = G__31342;
chunk__31331 = G__31343;
count__31332 = G__31344;
i__31333 = G__31345;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31396_31407 = cljs.core.seq.call(null,deps);
var chunk__31397_31408 = null;
var count__31398_31409 = (0);
var i__31399_31410 = (0);
while(true){
if((i__31399_31410 < count__31398_31409)){
var dep_31411 = cljs.core._nth.call(null,chunk__31397_31408,i__31399_31410);
topo_sort_helper_STAR_.call(null,dep_31411,(depth + (1)),state);

var G__31412 = seq__31396_31407;
var G__31413 = chunk__31397_31408;
var G__31414 = count__31398_31409;
var G__31415 = (i__31399_31410 + (1));
seq__31396_31407 = G__31412;
chunk__31397_31408 = G__31413;
count__31398_31409 = G__31414;
i__31399_31410 = G__31415;
continue;
} else {
var temp__4657__auto___31416 = cljs.core.seq.call(null,seq__31396_31407);
if(temp__4657__auto___31416){
var seq__31396_31417__$1 = temp__4657__auto___31416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31396_31417__$1)){
var c__25583__auto___31418 = cljs.core.chunk_first.call(null,seq__31396_31417__$1);
var G__31419 = cljs.core.chunk_rest.call(null,seq__31396_31417__$1);
var G__31420 = c__25583__auto___31418;
var G__31421 = cljs.core.count.call(null,c__25583__auto___31418);
var G__31422 = (0);
seq__31396_31407 = G__31419;
chunk__31397_31408 = G__31420;
count__31398_31409 = G__31421;
i__31399_31410 = G__31422;
continue;
} else {
var dep_31423 = cljs.core.first.call(null,seq__31396_31417__$1);
topo_sort_helper_STAR_.call(null,dep_31423,(depth + (1)),state);

var G__31424 = cljs.core.next.call(null,seq__31396_31417__$1);
var G__31425 = null;
var G__31426 = (0);
var G__31427 = (0);
seq__31396_31407 = G__31424;
chunk__31397_31408 = G__31425;
count__31398_31409 = G__31426;
i__31399_31410 = G__31427;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31400){
var vec__31404 = p__31400;
var seq__31405 = cljs.core.seq.call(null,vec__31404);
var first__31406 = cljs.core.first.call(null,seq__31405);
var seq__31405__$1 = cljs.core.next.call(null,seq__31405);
var x = first__31406;
var xs = seq__31405__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31404,seq__31405,first__31406,seq__31405__$1,x,xs,get_deps__$1){
return (function (p1__31346_SHARP_){
return clojure.set.difference.call(null,p1__31346_SHARP_,x);
});})(vec__31404,seq__31405,first__31406,seq__31405__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31440 = cljs.core.seq.call(null,provides);
var chunk__31441 = null;
var count__31442 = (0);
var i__31443 = (0);
while(true){
if((i__31443 < count__31442)){
var prov = cljs.core._nth.call(null,chunk__31441,i__31443);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31444_31452 = cljs.core.seq.call(null,requires);
var chunk__31445_31453 = null;
var count__31446_31454 = (0);
var i__31447_31455 = (0);
while(true){
if((i__31447_31455 < count__31446_31454)){
var req_31456 = cljs.core._nth.call(null,chunk__31445_31453,i__31447_31455);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31456,prov);

var G__31457 = seq__31444_31452;
var G__31458 = chunk__31445_31453;
var G__31459 = count__31446_31454;
var G__31460 = (i__31447_31455 + (1));
seq__31444_31452 = G__31457;
chunk__31445_31453 = G__31458;
count__31446_31454 = G__31459;
i__31447_31455 = G__31460;
continue;
} else {
var temp__4657__auto___31461 = cljs.core.seq.call(null,seq__31444_31452);
if(temp__4657__auto___31461){
var seq__31444_31462__$1 = temp__4657__auto___31461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31444_31462__$1)){
var c__25583__auto___31463 = cljs.core.chunk_first.call(null,seq__31444_31462__$1);
var G__31464 = cljs.core.chunk_rest.call(null,seq__31444_31462__$1);
var G__31465 = c__25583__auto___31463;
var G__31466 = cljs.core.count.call(null,c__25583__auto___31463);
var G__31467 = (0);
seq__31444_31452 = G__31464;
chunk__31445_31453 = G__31465;
count__31446_31454 = G__31466;
i__31447_31455 = G__31467;
continue;
} else {
var req_31468 = cljs.core.first.call(null,seq__31444_31462__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31468,prov);

var G__31469 = cljs.core.next.call(null,seq__31444_31462__$1);
var G__31470 = null;
var G__31471 = (0);
var G__31472 = (0);
seq__31444_31452 = G__31469;
chunk__31445_31453 = G__31470;
count__31446_31454 = G__31471;
i__31447_31455 = G__31472;
continue;
}
} else {
}
}
break;
}

var G__31473 = seq__31440;
var G__31474 = chunk__31441;
var G__31475 = count__31442;
var G__31476 = (i__31443 + (1));
seq__31440 = G__31473;
chunk__31441 = G__31474;
count__31442 = G__31475;
i__31443 = G__31476;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31440);
if(temp__4657__auto__){
var seq__31440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31440__$1)){
var c__25583__auto__ = cljs.core.chunk_first.call(null,seq__31440__$1);
var G__31477 = cljs.core.chunk_rest.call(null,seq__31440__$1);
var G__31478 = c__25583__auto__;
var G__31479 = cljs.core.count.call(null,c__25583__auto__);
var G__31480 = (0);
seq__31440 = G__31477;
chunk__31441 = G__31478;
count__31442 = G__31479;
i__31443 = G__31480;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31440__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31448_31481 = cljs.core.seq.call(null,requires);
var chunk__31449_31482 = null;
var count__31450_31483 = (0);
var i__31451_31484 = (0);
while(true){
if((i__31451_31484 < count__31450_31483)){
var req_31485 = cljs.core._nth.call(null,chunk__31449_31482,i__31451_31484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31485,prov);

var G__31486 = seq__31448_31481;
var G__31487 = chunk__31449_31482;
var G__31488 = count__31450_31483;
var G__31489 = (i__31451_31484 + (1));
seq__31448_31481 = G__31486;
chunk__31449_31482 = G__31487;
count__31450_31483 = G__31488;
i__31451_31484 = G__31489;
continue;
} else {
var temp__4657__auto___31490__$1 = cljs.core.seq.call(null,seq__31448_31481);
if(temp__4657__auto___31490__$1){
var seq__31448_31491__$1 = temp__4657__auto___31490__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31448_31491__$1)){
var c__25583__auto___31492 = cljs.core.chunk_first.call(null,seq__31448_31491__$1);
var G__31493 = cljs.core.chunk_rest.call(null,seq__31448_31491__$1);
var G__31494 = c__25583__auto___31492;
var G__31495 = cljs.core.count.call(null,c__25583__auto___31492);
var G__31496 = (0);
seq__31448_31481 = G__31493;
chunk__31449_31482 = G__31494;
count__31450_31483 = G__31495;
i__31451_31484 = G__31496;
continue;
} else {
var req_31497 = cljs.core.first.call(null,seq__31448_31491__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31497,prov);

var G__31498 = cljs.core.next.call(null,seq__31448_31491__$1);
var G__31499 = null;
var G__31500 = (0);
var G__31501 = (0);
seq__31448_31481 = G__31498;
chunk__31449_31482 = G__31499;
count__31450_31483 = G__31500;
i__31451_31484 = G__31501;
continue;
}
} else {
}
}
break;
}

var G__31502 = cljs.core.next.call(null,seq__31440__$1);
var G__31503 = null;
var G__31504 = (0);
var G__31505 = (0);
seq__31440 = G__31502;
chunk__31441 = G__31503;
count__31442 = G__31504;
i__31443 = G__31505;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31510_31514 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31511_31515 = null;
var count__31512_31516 = (0);
var i__31513_31517 = (0);
while(true){
if((i__31513_31517 < count__31512_31516)){
var ns_31518 = cljs.core._nth.call(null,chunk__31511_31515,i__31513_31517);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31518);

var G__31519 = seq__31510_31514;
var G__31520 = chunk__31511_31515;
var G__31521 = count__31512_31516;
var G__31522 = (i__31513_31517 + (1));
seq__31510_31514 = G__31519;
chunk__31511_31515 = G__31520;
count__31512_31516 = G__31521;
i__31513_31517 = G__31522;
continue;
} else {
var temp__4657__auto___31523 = cljs.core.seq.call(null,seq__31510_31514);
if(temp__4657__auto___31523){
var seq__31510_31524__$1 = temp__4657__auto___31523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31510_31524__$1)){
var c__25583__auto___31525 = cljs.core.chunk_first.call(null,seq__31510_31524__$1);
var G__31526 = cljs.core.chunk_rest.call(null,seq__31510_31524__$1);
var G__31527 = c__25583__auto___31525;
var G__31528 = cljs.core.count.call(null,c__25583__auto___31525);
var G__31529 = (0);
seq__31510_31514 = G__31526;
chunk__31511_31515 = G__31527;
count__31512_31516 = G__31528;
i__31513_31517 = G__31529;
continue;
} else {
var ns_31530 = cljs.core.first.call(null,seq__31510_31524__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31530);

var G__31531 = cljs.core.next.call(null,seq__31510_31524__$1);
var G__31532 = null;
var G__31533 = (0);
var G__31534 = (0);
seq__31510_31514 = G__31531;
chunk__31511_31515 = G__31532;
count__31512_31516 = G__31533;
i__31513_31517 = G__31534;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24772__auto__ = goog.require__;
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31535__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31536__i = 0, G__31536__a = new Array(arguments.length -  0);
while (G__31536__i < G__31536__a.length) {G__31536__a[G__31536__i] = arguments[G__31536__i + 0]; ++G__31536__i;}
  args = new cljs.core.IndexedSeq(G__31536__a,0);
} 
return G__31535__delegate.call(this,args);};
G__31535.cljs$lang$maxFixedArity = 0;
G__31535.cljs$lang$applyTo = (function (arglist__31537){
var args = cljs.core.seq(arglist__31537);
return G__31535__delegate(args);
});
G__31535.cljs$core$IFn$_invoke$arity$variadic = G__31535__delegate;
return G__31535;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31539 = cljs.core._EQ_;
var expr__31540 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31539.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31540))){
var path_parts = ((function (pred__31539,expr__31540){
return (function (p1__31538_SHARP_){
return clojure.string.split.call(null,p1__31538_SHARP_,/[\/\\]/);
});})(pred__31539,expr__31540))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31539,expr__31540){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31542){if((e31542 instanceof Error)){
var e = e31542;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31542;

}
}})());
});
;})(path_parts,sep,root,pred__31539,expr__31540))
} else {
if(cljs.core.truth_(pred__31539.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31540))){
return ((function (pred__31539,expr__31540){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31539,expr__31540){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31539,expr__31540))
);

return deferred.addErrback(((function (deferred,pred__31539,expr__31540){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31539,expr__31540))
);
});
;})(pred__31539,expr__31540))
} else {
return ((function (pred__31539,expr__31540){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31539,expr__31540))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31543,callback){
var map__31546 = p__31543;
var map__31546__$1 = ((((!((map__31546 == null)))?((((map__31546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var file_msg = map__31546__$1;
var request_url = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31546,map__31546__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31546,map__31546__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__){
return (function (state_31570){
var state_val_31571 = (state_31570[(1)]);
if((state_val_31571 === (7))){
var inst_31566 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31572_31592 = state_31570__$1;
(statearr_31572_31592[(2)] = inst_31566);

(statearr_31572_31592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (1))){
var state_31570__$1 = state_31570;
var statearr_31573_31593 = state_31570__$1;
(statearr_31573_31593[(2)] = null);

(statearr_31573_31593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (4))){
var inst_31550 = (state_31570[(7)]);
var inst_31550__$1 = (state_31570[(2)]);
var state_31570__$1 = (function (){var statearr_31574 = state_31570;
(statearr_31574[(7)] = inst_31550__$1);

return statearr_31574;
})();
if(cljs.core.truth_(inst_31550__$1)){
var statearr_31575_31594 = state_31570__$1;
(statearr_31575_31594[(1)] = (5));

} else {
var statearr_31576_31595 = state_31570__$1;
(statearr_31576_31595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (6))){
var state_31570__$1 = state_31570;
var statearr_31577_31596 = state_31570__$1;
(statearr_31577_31596[(2)] = null);

(statearr_31577_31596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (3))){
var inst_31568 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31570__$1,inst_31568);
} else {
if((state_val_31571 === (2))){
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31571 === (11))){
var inst_31562 = (state_31570[(2)]);
var state_31570__$1 = (function (){var statearr_31578 = state_31570;
(statearr_31578[(8)] = inst_31562);

return statearr_31578;
})();
var statearr_31579_31597 = state_31570__$1;
(statearr_31579_31597[(2)] = null);

(statearr_31579_31597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (9))){
var inst_31554 = (state_31570[(9)]);
var inst_31556 = (state_31570[(10)]);
var inst_31558 = inst_31556.call(null,inst_31554);
var state_31570__$1 = state_31570;
var statearr_31580_31598 = state_31570__$1;
(statearr_31580_31598[(2)] = inst_31558);

(statearr_31580_31598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (5))){
var inst_31550 = (state_31570[(7)]);
var inst_31552 = figwheel.client.file_reloading.blocking_load.call(null,inst_31550);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,(8),inst_31552);
} else {
if((state_val_31571 === (10))){
var inst_31554 = (state_31570[(9)]);
var inst_31560 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31554);
var state_31570__$1 = state_31570;
var statearr_31581_31599 = state_31570__$1;
(statearr_31581_31599[(2)] = inst_31560);

(statearr_31581_31599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (8))){
var inst_31550 = (state_31570[(7)]);
var inst_31556 = (state_31570[(10)]);
var inst_31554 = (state_31570[(2)]);
var inst_31555 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31556__$1 = cljs.core.get.call(null,inst_31555,inst_31550);
var state_31570__$1 = (function (){var statearr_31582 = state_31570;
(statearr_31582[(9)] = inst_31554);

(statearr_31582[(10)] = inst_31556__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31556__$1)){
var statearr_31583_31600 = state_31570__$1;
(statearr_31583_31600[(1)] = (9));

} else {
var statearr_31584_31601 = state_31570__$1;
(statearr_31584_31601[(1)] = (10));

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
});})(c__28397__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28286__auto__ = null;
var figwheel$client$file_reloading$state_machine__28286__auto____0 = (function (){
var statearr_31588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31588[(0)] = figwheel$client$file_reloading$state_machine__28286__auto__);

(statearr_31588[(1)] = (1));

return statearr_31588;
});
var figwheel$client$file_reloading$state_machine__28286__auto____1 = (function (state_31570){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_31570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31589){if((e31589 instanceof Object)){
var ex__28289__auto__ = e31589;
var statearr_31590_31602 = state_31570;
(statearr_31590_31602[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_31570;
state_31570 = G__31603;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28286__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28286__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28286__auto____0;
figwheel$client$file_reloading$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28286__auto____1;
return figwheel$client$file_reloading$state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__))
})();
var state__28399__auto__ = (function (){var statearr_31591 = f__28398__auto__.call(null);
(statearr_31591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__))
);

return c__28397__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31604,callback){
var map__31607 = p__31604;
var map__31607__$1 = ((((!((map__31607 == null)))?((((map__31607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31607):map__31607);
var file_msg = map__31607__$1;
var namespace = cljs.core.get.call(null,map__31607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31607,map__31607__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31607,map__31607__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31609){
var map__31612 = p__31609;
var map__31612__$1 = ((((!((map__31612 == null)))?((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var file_msg = map__31612__$1;
var namespace = cljs.core.get.call(null,map__31612__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24760__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24760__auto__){
var or__24772__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
var or__24772__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24772__auto____$1)){
return or__24772__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24760__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31614,callback){
var map__31617 = p__31614;
var map__31617__$1 = ((((!((map__31617 == null)))?((((map__31617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31617):map__31617);
var file_msg = map__31617__$1;
var request_url = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28397__auto___31721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___31721,out){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___31721,out){
return (function (state_31703){
var state_val_31704 = (state_31703[(1)]);
if((state_val_31704 === (1))){
var inst_31677 = cljs.core.seq.call(null,files);
var inst_31678 = cljs.core.first.call(null,inst_31677);
var inst_31679 = cljs.core.next.call(null,inst_31677);
var inst_31680 = files;
var state_31703__$1 = (function (){var statearr_31705 = state_31703;
(statearr_31705[(7)] = inst_31679);

(statearr_31705[(8)] = inst_31678);

(statearr_31705[(9)] = inst_31680);

return statearr_31705;
})();
var statearr_31706_31722 = state_31703__$1;
(statearr_31706_31722[(2)] = null);

(statearr_31706_31722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (2))){
var inst_31680 = (state_31703[(9)]);
var inst_31686 = (state_31703[(10)]);
var inst_31685 = cljs.core.seq.call(null,inst_31680);
var inst_31686__$1 = cljs.core.first.call(null,inst_31685);
var inst_31687 = cljs.core.next.call(null,inst_31685);
var inst_31688 = (inst_31686__$1 == null);
var inst_31689 = cljs.core.not.call(null,inst_31688);
var state_31703__$1 = (function (){var statearr_31707 = state_31703;
(statearr_31707[(11)] = inst_31687);

(statearr_31707[(10)] = inst_31686__$1);

return statearr_31707;
})();
if(inst_31689){
var statearr_31708_31723 = state_31703__$1;
(statearr_31708_31723[(1)] = (4));

} else {
var statearr_31709_31724 = state_31703__$1;
(statearr_31709_31724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (3))){
var inst_31701 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31703__$1,inst_31701);
} else {
if((state_val_31704 === (4))){
var inst_31686 = (state_31703[(10)]);
var inst_31691 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31686);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31703__$1,(7),inst_31691);
} else {
if((state_val_31704 === (5))){
var inst_31697 = cljs.core.async.close_BANG_.call(null,out);
var state_31703__$1 = state_31703;
var statearr_31710_31725 = state_31703__$1;
(statearr_31710_31725[(2)] = inst_31697);

(statearr_31710_31725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (6))){
var inst_31699 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31711_31726 = state_31703__$1;
(statearr_31711_31726[(2)] = inst_31699);

(statearr_31711_31726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (7))){
var inst_31687 = (state_31703[(11)]);
var inst_31693 = (state_31703[(2)]);
var inst_31694 = cljs.core.async.put_BANG_.call(null,out,inst_31693);
var inst_31680 = inst_31687;
var state_31703__$1 = (function (){var statearr_31712 = state_31703;
(statearr_31712[(9)] = inst_31680);

(statearr_31712[(12)] = inst_31694);

return statearr_31712;
})();
var statearr_31713_31727 = state_31703__$1;
(statearr_31713_31727[(2)] = null);

(statearr_31713_31727[(1)] = (2));


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
});})(c__28397__auto___31721,out))
;
return ((function (switch__28285__auto__,c__28397__auto___31721,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____0 = (function (){
var statearr_31717 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31717[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__);

(statearr_31717[(1)] = (1));

return statearr_31717;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____1 = (function (state_31703){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_31703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31718){if((e31718 instanceof Object)){
var ex__28289__auto__ = e31718;
var statearr_31719_31728 = state_31703;
(statearr_31719_31728[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31729 = state_31703;
state_31703 = G__31729;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__ = function(state_31703){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____1.call(this,state_31703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___31721,out))
})();
var state__28399__auto__ = (function (){var statearr_31720 = f__28398__auto__.call(null);
(statearr_31720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___31721);

return statearr_31720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___31721,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31730,opts){
var map__31734 = p__31730;
var map__31734__$1 = ((((!((map__31734 == null)))?((((map__31734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31734):map__31734);
var eval_body__$1 = cljs.core.get.call(null,map__31734__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24760__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24760__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24760__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31736){var e = e31736;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31737_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31737_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31746){
var vec__31747 = p__31746;
var k = cljs.core.nth.call(null,vec__31747,(0),null);
var v = cljs.core.nth.call(null,vec__31747,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31750){
var vec__31751 = p__31750;
var k = cljs.core.nth.call(null,vec__31751,(0),null);
var v = cljs.core.nth.call(null,vec__31751,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31757,p__31758){
var map__32005 = p__31757;
var map__32005__$1 = ((((!((map__32005 == null)))?((((map__32005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32005):map__32005);
var opts = map__32005__$1;
var before_jsload = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32006 = p__31758;
var map__32006__$1 = ((((!((map__32006 == null)))?((((map__32006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32006):map__32006);
var msg = map__32006__$1;
var files = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32006__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32159){
var state_val_32160 = (state_32159[(1)]);
if((state_val_32160 === (7))){
var inst_32020 = (state_32159[(7)]);
var inst_32021 = (state_32159[(8)]);
var inst_32022 = (state_32159[(9)]);
var inst_32023 = (state_32159[(10)]);
var inst_32028 = cljs.core._nth.call(null,inst_32021,inst_32023);
var inst_32029 = figwheel.client.file_reloading.eval_body.call(null,inst_32028,opts);
var inst_32030 = (inst_32023 + (1));
var tmp32161 = inst_32020;
var tmp32162 = inst_32021;
var tmp32163 = inst_32022;
var inst_32020__$1 = tmp32161;
var inst_32021__$1 = tmp32162;
var inst_32022__$1 = tmp32163;
var inst_32023__$1 = inst_32030;
var state_32159__$1 = (function (){var statearr_32164 = state_32159;
(statearr_32164[(7)] = inst_32020__$1);

(statearr_32164[(8)] = inst_32021__$1);

(statearr_32164[(9)] = inst_32022__$1);

(statearr_32164[(10)] = inst_32023__$1);

(statearr_32164[(11)] = inst_32029);

return statearr_32164;
})();
var statearr_32165_32251 = state_32159__$1;
(statearr_32165_32251[(2)] = null);

(statearr_32165_32251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (20))){
var inst_32063 = (state_32159[(12)]);
var inst_32071 = figwheel.client.file_reloading.sort_files.call(null,inst_32063);
var state_32159__$1 = state_32159;
var statearr_32166_32252 = state_32159__$1;
(statearr_32166_32252[(2)] = inst_32071);

(statearr_32166_32252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (27))){
var state_32159__$1 = state_32159;
var statearr_32167_32253 = state_32159__$1;
(statearr_32167_32253[(2)] = null);

(statearr_32167_32253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (1))){
var inst_32012 = (state_32159[(13)]);
var inst_32009 = before_jsload.call(null,files);
var inst_32010 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32011 = (function (){return ((function (inst_32012,inst_32009,inst_32010,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31754_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31754_SHARP_);
});
;})(inst_32012,inst_32009,inst_32010,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32012__$1 = cljs.core.filter.call(null,inst_32011,files);
var inst_32013 = cljs.core.not_empty.call(null,inst_32012__$1);
var state_32159__$1 = (function (){var statearr_32168 = state_32159;
(statearr_32168[(14)] = inst_32009);

(statearr_32168[(13)] = inst_32012__$1);

(statearr_32168[(15)] = inst_32010);

return statearr_32168;
})();
if(cljs.core.truth_(inst_32013)){
var statearr_32169_32254 = state_32159__$1;
(statearr_32169_32254[(1)] = (2));

} else {
var statearr_32170_32255 = state_32159__$1;
(statearr_32170_32255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (24))){
var state_32159__$1 = state_32159;
var statearr_32171_32256 = state_32159__$1;
(statearr_32171_32256[(2)] = null);

(statearr_32171_32256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (39))){
var inst_32113 = (state_32159[(16)]);
var state_32159__$1 = state_32159;
var statearr_32172_32257 = state_32159__$1;
(statearr_32172_32257[(2)] = inst_32113);

(statearr_32172_32257[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (46))){
var inst_32154 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32173_32258 = state_32159__$1;
(statearr_32173_32258[(2)] = inst_32154);

(statearr_32173_32258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (4))){
var inst_32057 = (state_32159[(2)]);
var inst_32058 = cljs.core.List.EMPTY;
var inst_32059 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32058);
var inst_32060 = (function (){return ((function (inst_32057,inst_32058,inst_32059,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31755_SHARP_){
var and__24760__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31755_SHARP_);
if(cljs.core.truth_(and__24760__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31755_SHARP_));
} else {
return and__24760__auto__;
}
});
;})(inst_32057,inst_32058,inst_32059,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32061 = cljs.core.filter.call(null,inst_32060,files);
var inst_32062 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32063 = cljs.core.concat.call(null,inst_32061,inst_32062);
var state_32159__$1 = (function (){var statearr_32174 = state_32159;
(statearr_32174[(17)] = inst_32057);

(statearr_32174[(18)] = inst_32059);

(statearr_32174[(12)] = inst_32063);

return statearr_32174;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32175_32259 = state_32159__$1;
(statearr_32175_32259[(1)] = (16));

} else {
var statearr_32176_32260 = state_32159__$1;
(statearr_32176_32260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (15))){
var inst_32047 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32177_32261 = state_32159__$1;
(statearr_32177_32261[(2)] = inst_32047);

(statearr_32177_32261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (21))){
var inst_32073 = (state_32159[(19)]);
var inst_32073__$1 = (state_32159[(2)]);
var inst_32074 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32073__$1);
var state_32159__$1 = (function (){var statearr_32178 = state_32159;
(statearr_32178[(19)] = inst_32073__$1);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32159__$1,(22),inst_32074);
} else {
if((state_val_32160 === (31))){
var inst_32157 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32159__$1,inst_32157);
} else {
if((state_val_32160 === (32))){
var inst_32113 = (state_32159[(16)]);
var inst_32118 = inst_32113.cljs$lang$protocol_mask$partition0$;
var inst_32119 = (inst_32118 & (64));
var inst_32120 = inst_32113.cljs$core$ISeq$;
var inst_32121 = (inst_32119) || (inst_32120);
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32121)){
var statearr_32179_32262 = state_32159__$1;
(statearr_32179_32262[(1)] = (35));

} else {
var statearr_32180_32263 = state_32159__$1;
(statearr_32180_32263[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (40))){
var inst_32134 = (state_32159[(20)]);
var inst_32133 = (state_32159[(2)]);
var inst_32134__$1 = cljs.core.get.call(null,inst_32133,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32135 = cljs.core.get.call(null,inst_32133,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32136 = cljs.core.not_empty.call(null,inst_32134__$1);
var state_32159__$1 = (function (){var statearr_32181 = state_32159;
(statearr_32181[(20)] = inst_32134__$1);

(statearr_32181[(21)] = inst_32135);

return statearr_32181;
})();
if(cljs.core.truth_(inst_32136)){
var statearr_32182_32264 = state_32159__$1;
(statearr_32182_32264[(1)] = (41));

} else {
var statearr_32183_32265 = state_32159__$1;
(statearr_32183_32265[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (33))){
var state_32159__$1 = state_32159;
var statearr_32184_32266 = state_32159__$1;
(statearr_32184_32266[(2)] = false);

(statearr_32184_32266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (13))){
var inst_32033 = (state_32159[(22)]);
var inst_32037 = cljs.core.chunk_first.call(null,inst_32033);
var inst_32038 = cljs.core.chunk_rest.call(null,inst_32033);
var inst_32039 = cljs.core.count.call(null,inst_32037);
var inst_32020 = inst_32038;
var inst_32021 = inst_32037;
var inst_32022 = inst_32039;
var inst_32023 = (0);
var state_32159__$1 = (function (){var statearr_32185 = state_32159;
(statearr_32185[(7)] = inst_32020);

(statearr_32185[(8)] = inst_32021);

(statearr_32185[(9)] = inst_32022);

(statearr_32185[(10)] = inst_32023);

return statearr_32185;
})();
var statearr_32186_32267 = state_32159__$1;
(statearr_32186_32267[(2)] = null);

(statearr_32186_32267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (22))){
var inst_32081 = (state_32159[(23)]);
var inst_32076 = (state_32159[(24)]);
var inst_32073 = (state_32159[(19)]);
var inst_32077 = (state_32159[(25)]);
var inst_32076__$1 = (state_32159[(2)]);
var inst_32077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32076__$1);
var inst_32078 = (function (){var all_files = inst_32073;
var res_SINGLEQUOTE_ = inst_32076__$1;
var res = inst_32077__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32081,inst_32076,inst_32073,inst_32077,inst_32076__$1,inst_32077__$1,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31756_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31756_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32081,inst_32076,inst_32073,inst_32077,inst_32076__$1,inst_32077__$1,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32079 = cljs.core.filter.call(null,inst_32078,inst_32076__$1);
var inst_32080 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32081__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32080);
var inst_32082 = cljs.core.not_empty.call(null,inst_32081__$1);
var state_32159__$1 = (function (){var statearr_32187 = state_32159;
(statearr_32187[(23)] = inst_32081__$1);

(statearr_32187[(26)] = inst_32079);

(statearr_32187[(24)] = inst_32076__$1);

(statearr_32187[(25)] = inst_32077__$1);

return statearr_32187;
})();
if(cljs.core.truth_(inst_32082)){
var statearr_32188_32268 = state_32159__$1;
(statearr_32188_32268[(1)] = (23));

} else {
var statearr_32189_32269 = state_32159__$1;
(statearr_32189_32269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (36))){
var state_32159__$1 = state_32159;
var statearr_32190_32270 = state_32159__$1;
(statearr_32190_32270[(2)] = false);

(statearr_32190_32270[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (41))){
var inst_32134 = (state_32159[(20)]);
var inst_32138 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32139 = cljs.core.map.call(null,inst_32138,inst_32134);
var inst_32140 = cljs.core.pr_str.call(null,inst_32139);
var inst_32141 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32140)].join('');
var inst_32142 = figwheel.client.utils.log.call(null,inst_32141);
var state_32159__$1 = state_32159;
var statearr_32191_32271 = state_32159__$1;
(statearr_32191_32271[(2)] = inst_32142);

(statearr_32191_32271[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (43))){
var inst_32135 = (state_32159[(21)]);
var inst_32145 = (state_32159[(2)]);
var inst_32146 = cljs.core.not_empty.call(null,inst_32135);
var state_32159__$1 = (function (){var statearr_32192 = state_32159;
(statearr_32192[(27)] = inst_32145);

return statearr_32192;
})();
if(cljs.core.truth_(inst_32146)){
var statearr_32193_32272 = state_32159__$1;
(statearr_32193_32272[(1)] = (44));

} else {
var statearr_32194_32273 = state_32159__$1;
(statearr_32194_32273[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (29))){
var inst_32081 = (state_32159[(23)]);
var inst_32079 = (state_32159[(26)]);
var inst_32076 = (state_32159[(24)]);
var inst_32113 = (state_32159[(16)]);
var inst_32073 = (state_32159[(19)]);
var inst_32077 = (state_32159[(25)]);
var inst_32109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32112 = (function (){var all_files = inst_32073;
var res_SINGLEQUOTE_ = inst_32076;
var res = inst_32077;
var files_not_loaded = inst_32079;
var dependencies_that_loaded = inst_32081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32113,inst_32073,inst_32077,inst_32109,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32111){
var map__32195 = p__32111;
var map__32195__$1 = ((((!((map__32195 == null)))?((((map__32195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32195):map__32195);
var namespace = cljs.core.get.call(null,map__32195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32113,inst_32073,inst_32077,inst_32109,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32113__$1 = cljs.core.group_by.call(null,inst_32112,inst_32079);
var inst_32115 = (inst_32113__$1 == null);
var inst_32116 = cljs.core.not.call(null,inst_32115);
var state_32159__$1 = (function (){var statearr_32197 = state_32159;
(statearr_32197[(16)] = inst_32113__$1);

(statearr_32197[(28)] = inst_32109);

return statearr_32197;
})();
if(inst_32116){
var statearr_32198_32274 = state_32159__$1;
(statearr_32198_32274[(1)] = (32));

} else {
var statearr_32199_32275 = state_32159__$1;
(statearr_32199_32275[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (44))){
var inst_32135 = (state_32159[(21)]);
var inst_32148 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32135);
var inst_32149 = cljs.core.pr_str.call(null,inst_32148);
var inst_32150 = [cljs.core.str("not required: "),cljs.core.str(inst_32149)].join('');
var inst_32151 = figwheel.client.utils.log.call(null,inst_32150);
var state_32159__$1 = state_32159;
var statearr_32200_32276 = state_32159__$1;
(statearr_32200_32276[(2)] = inst_32151);

(statearr_32200_32276[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (6))){
var inst_32054 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32201_32277 = state_32159__$1;
(statearr_32201_32277[(2)] = inst_32054);

(statearr_32201_32277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (28))){
var inst_32079 = (state_32159[(26)]);
var inst_32106 = (state_32159[(2)]);
var inst_32107 = cljs.core.not_empty.call(null,inst_32079);
var state_32159__$1 = (function (){var statearr_32202 = state_32159;
(statearr_32202[(29)] = inst_32106);

return statearr_32202;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32203_32278 = state_32159__$1;
(statearr_32203_32278[(1)] = (29));

} else {
var statearr_32204_32279 = state_32159__$1;
(statearr_32204_32279[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (25))){
var inst_32077 = (state_32159[(25)]);
var inst_32093 = (state_32159[(2)]);
var inst_32094 = cljs.core.not_empty.call(null,inst_32077);
var state_32159__$1 = (function (){var statearr_32205 = state_32159;
(statearr_32205[(30)] = inst_32093);

return statearr_32205;
})();
if(cljs.core.truth_(inst_32094)){
var statearr_32206_32280 = state_32159__$1;
(statearr_32206_32280[(1)] = (26));

} else {
var statearr_32207_32281 = state_32159__$1;
(statearr_32207_32281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (34))){
var inst_32128 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32128)){
var statearr_32208_32282 = state_32159__$1;
(statearr_32208_32282[(1)] = (38));

} else {
var statearr_32209_32283 = state_32159__$1;
(statearr_32209_32283[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (17))){
var state_32159__$1 = state_32159;
var statearr_32210_32284 = state_32159__$1;
(statearr_32210_32284[(2)] = recompile_dependents);

(statearr_32210_32284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (3))){
var state_32159__$1 = state_32159;
var statearr_32211_32285 = state_32159__$1;
(statearr_32211_32285[(2)] = null);

(statearr_32211_32285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (12))){
var inst_32050 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32212_32286 = state_32159__$1;
(statearr_32212_32286[(2)] = inst_32050);

(statearr_32212_32286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (2))){
var inst_32012 = (state_32159[(13)]);
var inst_32019 = cljs.core.seq.call(null,inst_32012);
var inst_32020 = inst_32019;
var inst_32021 = null;
var inst_32022 = (0);
var inst_32023 = (0);
var state_32159__$1 = (function (){var statearr_32213 = state_32159;
(statearr_32213[(7)] = inst_32020);

(statearr_32213[(8)] = inst_32021);

(statearr_32213[(9)] = inst_32022);

(statearr_32213[(10)] = inst_32023);

return statearr_32213;
})();
var statearr_32214_32287 = state_32159__$1;
(statearr_32214_32287[(2)] = null);

(statearr_32214_32287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (23))){
var inst_32081 = (state_32159[(23)]);
var inst_32079 = (state_32159[(26)]);
var inst_32076 = (state_32159[(24)]);
var inst_32073 = (state_32159[(19)]);
var inst_32077 = (state_32159[(25)]);
var inst_32084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32086 = (function (){var all_files = inst_32073;
var res_SINGLEQUOTE_ = inst_32076;
var res = inst_32077;
var files_not_loaded = inst_32079;
var dependencies_that_loaded = inst_32081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32084,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32085){
var map__32215 = p__32085;
var map__32215__$1 = ((((!((map__32215 == null)))?((((map__32215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32215):map__32215);
var request_url = cljs.core.get.call(null,map__32215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32084,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32087 = cljs.core.reverse.call(null,inst_32081);
var inst_32088 = cljs.core.map.call(null,inst_32086,inst_32087);
var inst_32089 = cljs.core.pr_str.call(null,inst_32088);
var inst_32090 = figwheel.client.utils.log.call(null,inst_32089);
var state_32159__$1 = (function (){var statearr_32217 = state_32159;
(statearr_32217[(31)] = inst_32084);

return statearr_32217;
})();
var statearr_32218_32288 = state_32159__$1;
(statearr_32218_32288[(2)] = inst_32090);

(statearr_32218_32288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (35))){
var state_32159__$1 = state_32159;
var statearr_32219_32289 = state_32159__$1;
(statearr_32219_32289[(2)] = true);

(statearr_32219_32289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (19))){
var inst_32063 = (state_32159[(12)]);
var inst_32069 = figwheel.client.file_reloading.expand_files.call(null,inst_32063);
var state_32159__$1 = state_32159;
var statearr_32220_32290 = state_32159__$1;
(statearr_32220_32290[(2)] = inst_32069);

(statearr_32220_32290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (11))){
var state_32159__$1 = state_32159;
var statearr_32221_32291 = state_32159__$1;
(statearr_32221_32291[(2)] = null);

(statearr_32221_32291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (9))){
var inst_32052 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32222_32292 = state_32159__$1;
(statearr_32222_32292[(2)] = inst_32052);

(statearr_32222_32292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (5))){
var inst_32022 = (state_32159[(9)]);
var inst_32023 = (state_32159[(10)]);
var inst_32025 = (inst_32023 < inst_32022);
var inst_32026 = inst_32025;
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32026)){
var statearr_32223_32293 = state_32159__$1;
(statearr_32223_32293[(1)] = (7));

} else {
var statearr_32224_32294 = state_32159__$1;
(statearr_32224_32294[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (14))){
var inst_32033 = (state_32159[(22)]);
var inst_32042 = cljs.core.first.call(null,inst_32033);
var inst_32043 = figwheel.client.file_reloading.eval_body.call(null,inst_32042,opts);
var inst_32044 = cljs.core.next.call(null,inst_32033);
var inst_32020 = inst_32044;
var inst_32021 = null;
var inst_32022 = (0);
var inst_32023 = (0);
var state_32159__$1 = (function (){var statearr_32225 = state_32159;
(statearr_32225[(32)] = inst_32043);

(statearr_32225[(7)] = inst_32020);

(statearr_32225[(8)] = inst_32021);

(statearr_32225[(9)] = inst_32022);

(statearr_32225[(10)] = inst_32023);

return statearr_32225;
})();
var statearr_32226_32295 = state_32159__$1;
(statearr_32226_32295[(2)] = null);

(statearr_32226_32295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (45))){
var state_32159__$1 = state_32159;
var statearr_32227_32296 = state_32159__$1;
(statearr_32227_32296[(2)] = null);

(statearr_32227_32296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (26))){
var inst_32081 = (state_32159[(23)]);
var inst_32079 = (state_32159[(26)]);
var inst_32076 = (state_32159[(24)]);
var inst_32073 = (state_32159[(19)]);
var inst_32077 = (state_32159[(25)]);
var inst_32096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32098 = (function (){var all_files = inst_32073;
var res_SINGLEQUOTE_ = inst_32076;
var res = inst_32077;
var files_not_loaded = inst_32079;
var dependencies_that_loaded = inst_32081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32096,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32097){
var map__32228 = p__32097;
var map__32228__$1 = ((((!((map__32228 == null)))?((((map__32228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var namespace = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32096,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32099 = cljs.core.map.call(null,inst_32098,inst_32077);
var inst_32100 = cljs.core.pr_str.call(null,inst_32099);
var inst_32101 = figwheel.client.utils.log.call(null,inst_32100);
var inst_32102 = (function (){var all_files = inst_32073;
var res_SINGLEQUOTE_ = inst_32076;
var res = inst_32077;
var files_not_loaded = inst_32079;
var dependencies_that_loaded = inst_32081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32096,inst_32098,inst_32099,inst_32100,inst_32101,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32081,inst_32079,inst_32076,inst_32073,inst_32077,inst_32096,inst_32098,inst_32099,inst_32100,inst_32101,state_val_32160,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32103 = setTimeout(inst_32102,(10));
var state_32159__$1 = (function (){var statearr_32230 = state_32159;
(statearr_32230[(33)] = inst_32101);

(statearr_32230[(34)] = inst_32096);

return statearr_32230;
})();
var statearr_32231_32297 = state_32159__$1;
(statearr_32231_32297[(2)] = inst_32103);

(statearr_32231_32297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (16))){
var state_32159__$1 = state_32159;
var statearr_32232_32298 = state_32159__$1;
(statearr_32232_32298[(2)] = reload_dependents);

(statearr_32232_32298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (38))){
var inst_32113 = (state_32159[(16)]);
var inst_32130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32113);
var state_32159__$1 = state_32159;
var statearr_32233_32299 = state_32159__$1;
(statearr_32233_32299[(2)] = inst_32130);

(statearr_32233_32299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (30))){
var state_32159__$1 = state_32159;
var statearr_32234_32300 = state_32159__$1;
(statearr_32234_32300[(2)] = null);

(statearr_32234_32300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (10))){
var inst_32033 = (state_32159[(22)]);
var inst_32035 = cljs.core.chunked_seq_QMARK_.call(null,inst_32033);
var state_32159__$1 = state_32159;
if(inst_32035){
var statearr_32235_32301 = state_32159__$1;
(statearr_32235_32301[(1)] = (13));

} else {
var statearr_32236_32302 = state_32159__$1;
(statearr_32236_32302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (18))){
var inst_32067 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32067)){
var statearr_32237_32303 = state_32159__$1;
(statearr_32237_32303[(1)] = (19));

} else {
var statearr_32238_32304 = state_32159__$1;
(statearr_32238_32304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (42))){
var state_32159__$1 = state_32159;
var statearr_32239_32305 = state_32159__$1;
(statearr_32239_32305[(2)] = null);

(statearr_32239_32305[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (37))){
var inst_32125 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32240_32306 = state_32159__$1;
(statearr_32240_32306[(2)] = inst_32125);

(statearr_32240_32306[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (8))){
var inst_32033 = (state_32159[(22)]);
var inst_32020 = (state_32159[(7)]);
var inst_32033__$1 = cljs.core.seq.call(null,inst_32020);
var state_32159__$1 = (function (){var statearr_32241 = state_32159;
(statearr_32241[(22)] = inst_32033__$1);

return statearr_32241;
})();
if(inst_32033__$1){
var statearr_32242_32307 = state_32159__$1;
(statearr_32242_32307[(1)] = (10));

} else {
var statearr_32243_32308 = state_32159__$1;
(statearr_32243_32308[(1)] = (11));

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
}
});})(c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28285__auto__,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____0 = (function (){
var statearr_32247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32247[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__);

(statearr_32247[(1)] = (1));

return statearr_32247;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____1 = (function (state_32159){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_32159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e32248){if((e32248 instanceof Object)){
var ex__28289__auto__ = e32248;
var statearr_32249_32309 = state_32159;
(statearr_32249_32309[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32310 = state_32159;
state_32159 = G__32310;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__ = function(state_32159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____1.call(this,state_32159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28399__auto__ = (function (){var statearr_32250 = f__28398__auto__.call(null);
(statearr_32250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__,map__32005,map__32005__$1,opts,before_jsload,on_jsload,reload_dependents,map__32006,map__32006__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28397__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32313,link){
var map__32316 = p__32313;
var map__32316__$1 = ((((!((map__32316 == null)))?((((map__32316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);
var file = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32316,map__32316__$1,file){
return (function (p1__32311_SHARP_,p2__32312_SHARP_){
if(cljs.core._EQ_.call(null,p1__32311_SHARP_,p2__32312_SHARP_)){
return p1__32311_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32316,map__32316__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32322){
var map__32323 = p__32322;
var map__32323__$1 = ((((!((map__32323 == null)))?((((map__32323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32323):map__32323);
var match_length = cljs.core.get.call(null,map__32323__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32323__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32318_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32318_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32325 = [];
var len__25847__auto___32328 = arguments.length;
var i__25848__auto___32329 = (0);
while(true){
if((i__25848__auto___32329 < len__25847__auto___32328)){
args32325.push((arguments[i__25848__auto___32329]));

var G__32330 = (i__25848__auto___32329 + (1));
i__25848__auto___32329 = G__32330;
continue;
} else {
}
break;
}

var G__32327 = args32325.length;
switch (G__32327) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32325.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32332_SHARP_,p2__32333_SHARP_){
return cljs.core.assoc.call(null,p1__32332_SHARP_,cljs.core.get.call(null,p2__32333_SHARP_,key),p2__32333_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32334){
var map__32337 = p__32334;
var map__32337__$1 = ((((!((map__32337 == null)))?((((map__32337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32337):map__32337);
var f_data = map__32337__$1;
var file = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32339,p__32340){
var map__32349 = p__32339;
var map__32349__$1 = ((((!((map__32349 == null)))?((((map__32349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32349):map__32349);
var opts = map__32349__$1;
var on_cssload = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32350 = p__32340;
var map__32350__$1 = ((((!((map__32350 == null)))?((((map__32350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32350):map__32350);
var files_msg = map__32350__$1;
var files = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32353_32357 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32354_32358 = null;
var count__32355_32359 = (0);
var i__32356_32360 = (0);
while(true){
if((i__32356_32360 < count__32355_32359)){
var f_32361 = cljs.core._nth.call(null,chunk__32354_32358,i__32356_32360);
figwheel.client.file_reloading.reload_css_file.call(null,f_32361);

var G__32362 = seq__32353_32357;
var G__32363 = chunk__32354_32358;
var G__32364 = count__32355_32359;
var G__32365 = (i__32356_32360 + (1));
seq__32353_32357 = G__32362;
chunk__32354_32358 = G__32363;
count__32355_32359 = G__32364;
i__32356_32360 = G__32365;
continue;
} else {
var temp__4657__auto___32366 = cljs.core.seq.call(null,seq__32353_32357);
if(temp__4657__auto___32366){
var seq__32353_32367__$1 = temp__4657__auto___32366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32353_32367__$1)){
var c__25583__auto___32368 = cljs.core.chunk_first.call(null,seq__32353_32367__$1);
var G__32369 = cljs.core.chunk_rest.call(null,seq__32353_32367__$1);
var G__32370 = c__25583__auto___32368;
var G__32371 = cljs.core.count.call(null,c__25583__auto___32368);
var G__32372 = (0);
seq__32353_32357 = G__32369;
chunk__32354_32358 = G__32370;
count__32355_32359 = G__32371;
i__32356_32360 = G__32372;
continue;
} else {
var f_32373 = cljs.core.first.call(null,seq__32353_32367__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32373);

var G__32374 = cljs.core.next.call(null,seq__32353_32367__$1);
var G__32375 = null;
var G__32376 = (0);
var G__32377 = (0);
seq__32353_32357 = G__32374;
chunk__32354_32358 = G__32375;
count__32355_32359 = G__32376;
i__32356_32360 = G__32377;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32349,map__32349__$1,opts,on_cssload,map__32350,map__32350__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32349,map__32349__$1,opts,on_cssload,map__32350,map__32350__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506684305290