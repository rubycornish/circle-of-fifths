// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35848 = [];
var len__25847__auto___35851 = arguments.length;
var i__25848__auto___35852 = (0);
while(true){
if((i__25848__auto___35852 < len__25847__auto___35851)){
args35848.push((arguments[i__25848__auto___35852]));

var G__35853 = (i__25848__auto___35852 + (1));
i__25848__auto___35852 = G__35853;
continue;
} else {
}
break;
}

var G__35850 = args35848.length;
switch (G__35850) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35848.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25854__auto__ = [];
var len__25847__auto___35856 = arguments.length;
var i__25848__auto___35857 = (0);
while(true){
if((i__25848__auto___35857 < len__25847__auto___35856)){
args__25854__auto__.push((arguments[i__25848__auto___35857]));

var G__35858 = (i__25848__auto___35857 + (1));
i__25848__auto___35857 = G__35858;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35855){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35855));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25854__auto__ = [];
var len__25847__auto___35860 = arguments.length;
var i__25848__auto___35861 = (0);
while(true){
if((i__25848__auto___35861 < len__25847__auto___35860)){
args__25854__auto__.push((arguments[i__25848__auto___35861]));

var G__35862 = (i__25848__auto___35861 + (1));
i__25848__auto___35861 = G__35862;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35859){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35859));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35863 = cljs.core._EQ_;
var expr__35864 = (function (){var or__24772__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35867){if((e35867 instanceof Error)){
var e = e35867;
return false;
} else {
throw e35867;

}
}})();
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35863.call(null,"true",expr__35864))){
return true;
} else {
if(cljs.core.truth_(pred__35863.call(null,"false",expr__35864))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35864)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35869){if((e35869 instanceof Error)){
var e = e35869;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35869;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35870){
var map__35873 = p__35870;
var map__35873__$1 = ((((!((map__35873 == null)))?((((map__35873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35873):map__35873);
var message = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24772__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24760__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24760__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24760__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28397__auto___36035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___36035,ch){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___36035,ch){
return (function (state_36004){
var state_val_36005 = (state_36004[(1)]);
if((state_val_36005 === (7))){
var inst_36000 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36006_36036 = state_36004__$1;
(statearr_36006_36036[(2)] = inst_36000);

(statearr_36006_36036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (1))){
var state_36004__$1 = state_36004;
var statearr_36007_36037 = state_36004__$1;
(statearr_36007_36037[(2)] = null);

(statearr_36007_36037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (4))){
var inst_35957 = (state_36004[(7)]);
var inst_35957__$1 = (state_36004[(2)]);
var state_36004__$1 = (function (){var statearr_36008 = state_36004;
(statearr_36008[(7)] = inst_35957__$1);

return statearr_36008;
})();
if(cljs.core.truth_(inst_35957__$1)){
var statearr_36009_36038 = state_36004__$1;
(statearr_36009_36038[(1)] = (5));

} else {
var statearr_36010_36039 = state_36004__$1;
(statearr_36010_36039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (15))){
var inst_35964 = (state_36004[(8)]);
var inst_35979 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35964);
var inst_35980 = cljs.core.first.call(null,inst_35979);
var inst_35981 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35980);
var inst_35982 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35981)].join('');
var inst_35983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35982);
var state_36004__$1 = state_36004;
var statearr_36011_36040 = state_36004__$1;
(statearr_36011_36040[(2)] = inst_35983);

(statearr_36011_36040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (13))){
var inst_35988 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36012_36041 = state_36004__$1;
(statearr_36012_36041[(2)] = inst_35988);

(statearr_36012_36041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (6))){
var state_36004__$1 = state_36004;
var statearr_36013_36042 = state_36004__$1;
(statearr_36013_36042[(2)] = null);

(statearr_36013_36042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (17))){
var inst_35986 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36014_36043 = state_36004__$1;
(statearr_36014_36043[(2)] = inst_35986);

(statearr_36014_36043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (3))){
var inst_36002 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36004__$1,inst_36002);
} else {
if((state_val_36005 === (12))){
var inst_35963 = (state_36004[(9)]);
var inst_35977 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35963,opts);
var state_36004__$1 = state_36004;
if(cljs.core.truth_(inst_35977)){
var statearr_36015_36044 = state_36004__$1;
(statearr_36015_36044[(1)] = (15));

} else {
var statearr_36016_36045 = state_36004__$1;
(statearr_36016_36045[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (2))){
var state_36004__$1 = state_36004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36004__$1,(4),ch);
} else {
if((state_val_36005 === (11))){
var inst_35964 = (state_36004[(8)]);
var inst_35969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35970 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35964);
var inst_35971 = cljs.core.async.timeout.call(null,(1000));
var inst_35972 = [inst_35970,inst_35971];
var inst_35973 = (new cljs.core.PersistentVector(null,2,(5),inst_35969,inst_35972,null));
var state_36004__$1 = state_36004;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36004__$1,(14),inst_35973);
} else {
if((state_val_36005 === (9))){
var inst_35964 = (state_36004[(8)]);
var inst_35990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35991 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35964);
var inst_35992 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35991);
var inst_35993 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35992)].join('');
var inst_35994 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35993);
var state_36004__$1 = (function (){var statearr_36017 = state_36004;
(statearr_36017[(10)] = inst_35990);

return statearr_36017;
})();
var statearr_36018_36046 = state_36004__$1;
(statearr_36018_36046[(2)] = inst_35994);

(statearr_36018_36046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (5))){
var inst_35957 = (state_36004[(7)]);
var inst_35959 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35960 = (new cljs.core.PersistentArrayMap(null,2,inst_35959,null));
var inst_35961 = (new cljs.core.PersistentHashSet(null,inst_35960,null));
var inst_35962 = figwheel.client.focus_msgs.call(null,inst_35961,inst_35957);
var inst_35963 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35962);
var inst_35964 = cljs.core.first.call(null,inst_35962);
var inst_35965 = figwheel.client.autoload_QMARK_.call(null);
var state_36004__$1 = (function (){var statearr_36019 = state_36004;
(statearr_36019[(8)] = inst_35964);

(statearr_36019[(9)] = inst_35963);

return statearr_36019;
})();
if(cljs.core.truth_(inst_35965)){
var statearr_36020_36047 = state_36004__$1;
(statearr_36020_36047[(1)] = (8));

} else {
var statearr_36021_36048 = state_36004__$1;
(statearr_36021_36048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (14))){
var inst_35975 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36022_36049 = state_36004__$1;
(statearr_36022_36049[(2)] = inst_35975);

(statearr_36022_36049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (16))){
var state_36004__$1 = state_36004;
var statearr_36023_36050 = state_36004__$1;
(statearr_36023_36050[(2)] = null);

(statearr_36023_36050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (10))){
var inst_35996 = (state_36004[(2)]);
var state_36004__$1 = (function (){var statearr_36024 = state_36004;
(statearr_36024[(11)] = inst_35996);

return statearr_36024;
})();
var statearr_36025_36051 = state_36004__$1;
(statearr_36025_36051[(2)] = null);

(statearr_36025_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (8))){
var inst_35963 = (state_36004[(9)]);
var inst_35967 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35963,opts);
var state_36004__$1 = state_36004;
if(cljs.core.truth_(inst_35967)){
var statearr_36026_36052 = state_36004__$1;
(statearr_36026_36052[(1)] = (11));

} else {
var statearr_36027_36053 = state_36004__$1;
(statearr_36027_36053[(1)] = (12));

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
});})(c__28397__auto___36035,ch))
;
return ((function (switch__28285__auto__,c__28397__auto___36035,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____0 = (function (){
var statearr_36031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36031[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__);

(statearr_36031[(1)] = (1));

return statearr_36031;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____1 = (function (state_36004){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_36004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e36032){if((e36032 instanceof Object)){
var ex__28289__auto__ = e36032;
var statearr_36033_36054 = state_36004;
(statearr_36033_36054[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_36004;
state_36004 = G__36055;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__ = function(state_36004){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____1.call(this,state_36004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28286__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___36035,ch))
})();
var state__28399__auto__ = (function (){var statearr_36034 = f__28398__auto__.call(null);
(statearr_36034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___36035);

return statearr_36034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___36035,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36056_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36056_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36059 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36059){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36058){if((e36058 instanceof Error)){
var e = e36058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36059], null));
} else {
var e = e36058;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36059))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36060){
var map__36069 = p__36060;
var map__36069__$1 = ((((!((map__36069 == null)))?((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36069):map__36069);
var opts = map__36069__$1;
var build_id = cljs.core.get.call(null,map__36069__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36069,map__36069__$1,opts,build_id){
return (function (p__36071){
var vec__36072 = p__36071;
var seq__36073 = cljs.core.seq.call(null,vec__36072);
var first__36074 = cljs.core.first.call(null,seq__36073);
var seq__36073__$1 = cljs.core.next.call(null,seq__36073);
var map__36075 = first__36074;
var map__36075__$1 = ((((!((map__36075 == null)))?((((map__36075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36075):map__36075);
var msg = map__36075__$1;
var msg_name = cljs.core.get.call(null,map__36075__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36073__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36072,seq__36073,first__36074,seq__36073__$1,map__36075,map__36075__$1,msg,msg_name,_,map__36069,map__36069__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36072,seq__36073,first__36074,seq__36073__$1,map__36075,map__36075__$1,msg,msg_name,_,map__36069,map__36069__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36069,map__36069__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36083){
var vec__36084 = p__36083;
var seq__36085 = cljs.core.seq.call(null,vec__36084);
var first__36086 = cljs.core.first.call(null,seq__36085);
var seq__36085__$1 = cljs.core.next.call(null,seq__36085);
var map__36087 = first__36086;
var map__36087__$1 = ((((!((map__36087 == null)))?((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36087):map__36087);
var msg = map__36087__$1;
var msg_name = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36085__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36089){
var map__36101 = p__36089;
var map__36101__$1 = ((((!((map__36101 == null)))?((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36101):map__36101);
var on_compile_warning = cljs.core.get.call(null,map__36101__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36101__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36101,map__36101__$1,on_compile_warning,on_compile_fail){
return (function (p__36103){
var vec__36104 = p__36103;
var seq__36105 = cljs.core.seq.call(null,vec__36104);
var first__36106 = cljs.core.first.call(null,seq__36105);
var seq__36105__$1 = cljs.core.next.call(null,seq__36105);
var map__36107 = first__36106;
var map__36107__$1 = ((((!((map__36107 == null)))?((((map__36107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36107):map__36107);
var msg = map__36107__$1;
var msg_name = cljs.core.get.call(null,map__36107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36105__$1;
var pred__36109 = cljs.core._EQ_;
var expr__36110 = msg_name;
if(cljs.core.truth_(pred__36109.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36110))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36109.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36110))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36101,map__36101__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__,msg_hist,msg_names,msg){
return (function (state_36338){
var state_val_36339 = (state_36338[(1)]);
if((state_val_36339 === (7))){
var inst_36258 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36258)){
var statearr_36340_36390 = state_36338__$1;
(statearr_36340_36390[(1)] = (8));

} else {
var statearr_36341_36391 = state_36338__$1;
(statearr_36341_36391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (20))){
var inst_36332 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36342_36392 = state_36338__$1;
(statearr_36342_36392[(2)] = inst_36332);

(statearr_36342_36392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (27))){
var inst_36328 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36343_36393 = state_36338__$1;
(statearr_36343_36393[(2)] = inst_36328);

(statearr_36343_36393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (1))){
var inst_36251 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36251)){
var statearr_36344_36394 = state_36338__$1;
(statearr_36344_36394[(1)] = (2));

} else {
var statearr_36345_36395 = state_36338__$1;
(statearr_36345_36395[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (24))){
var inst_36330 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36346_36396 = state_36338__$1;
(statearr_36346_36396[(2)] = inst_36330);

(statearr_36346_36396[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (4))){
var inst_36336 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36338__$1,inst_36336);
} else {
if((state_val_36339 === (15))){
var inst_36334 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36347_36397 = state_36338__$1;
(statearr_36347_36397[(2)] = inst_36334);

(statearr_36347_36397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (21))){
var inst_36287 = (state_36338[(2)]);
var inst_36288 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36289 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36288);
var state_36338__$1 = (function (){var statearr_36348 = state_36338;
(statearr_36348[(7)] = inst_36287);

return statearr_36348;
})();
var statearr_36349_36398 = state_36338__$1;
(statearr_36349_36398[(2)] = inst_36289);

(statearr_36349_36398[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (31))){
var inst_36317 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36317)){
var statearr_36350_36399 = state_36338__$1;
(statearr_36350_36399[(1)] = (34));

} else {
var statearr_36351_36400 = state_36338__$1;
(statearr_36351_36400[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (32))){
var inst_36326 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36352_36401 = state_36338__$1;
(statearr_36352_36401[(2)] = inst_36326);

(statearr_36352_36401[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (33))){
var inst_36313 = (state_36338[(2)]);
var inst_36314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36314);
var state_36338__$1 = (function (){var statearr_36353 = state_36338;
(statearr_36353[(8)] = inst_36313);

return statearr_36353;
})();
var statearr_36354_36402 = state_36338__$1;
(statearr_36354_36402[(2)] = inst_36315);

(statearr_36354_36402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (13))){
var inst_36272 = figwheel.client.heads_up.clear.call(null);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(16),inst_36272);
} else {
if((state_val_36339 === (22))){
var inst_36293 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36294 = figwheel.client.heads_up.append_warning_message.call(null,inst_36293);
var state_36338__$1 = state_36338;
var statearr_36355_36403 = state_36338__$1;
(statearr_36355_36403[(2)] = inst_36294);

(statearr_36355_36403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (36))){
var inst_36324 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36356_36404 = state_36338__$1;
(statearr_36356_36404[(2)] = inst_36324);

(statearr_36356_36404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (29))){
var inst_36304 = (state_36338[(2)]);
var inst_36305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36305);
var state_36338__$1 = (function (){var statearr_36357 = state_36338;
(statearr_36357[(9)] = inst_36304);

return statearr_36357;
})();
var statearr_36358_36405 = state_36338__$1;
(statearr_36358_36405[(2)] = inst_36306);

(statearr_36358_36405[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (6))){
var inst_36253 = (state_36338[(10)]);
var state_36338__$1 = state_36338;
var statearr_36359_36406 = state_36338__$1;
(statearr_36359_36406[(2)] = inst_36253);

(statearr_36359_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (28))){
var inst_36300 = (state_36338[(2)]);
var inst_36301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36302 = figwheel.client.heads_up.display_warning.call(null,inst_36301);
var state_36338__$1 = (function (){var statearr_36360 = state_36338;
(statearr_36360[(11)] = inst_36300);

return statearr_36360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(29),inst_36302);
} else {
if((state_val_36339 === (25))){
var inst_36298 = figwheel.client.heads_up.clear.call(null);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(28),inst_36298);
} else {
if((state_val_36339 === (34))){
var inst_36319 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(37),inst_36319);
} else {
if((state_val_36339 === (17))){
var inst_36278 = (state_36338[(2)]);
var inst_36279 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36279);
var state_36338__$1 = (function (){var statearr_36361 = state_36338;
(statearr_36361[(12)] = inst_36278);

return statearr_36361;
})();
var statearr_36362_36407 = state_36338__$1;
(statearr_36362_36407[(2)] = inst_36280);

(statearr_36362_36407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (3))){
var inst_36270 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36270)){
var statearr_36363_36408 = state_36338__$1;
(statearr_36363_36408[(1)] = (13));

} else {
var statearr_36364_36409 = state_36338__$1;
(statearr_36364_36409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (12))){
var inst_36266 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36365_36410 = state_36338__$1;
(statearr_36365_36410[(2)] = inst_36266);

(statearr_36365_36410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (2))){
var inst_36253 = (state_36338[(10)]);
var inst_36253__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36338__$1 = (function (){var statearr_36366 = state_36338;
(statearr_36366[(10)] = inst_36253__$1);

return statearr_36366;
})();
if(cljs.core.truth_(inst_36253__$1)){
var statearr_36367_36411 = state_36338__$1;
(statearr_36367_36411[(1)] = (5));

} else {
var statearr_36368_36412 = state_36338__$1;
(statearr_36368_36412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (23))){
var inst_36296 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36296)){
var statearr_36369_36413 = state_36338__$1;
(statearr_36369_36413[(1)] = (25));

} else {
var statearr_36370_36414 = state_36338__$1;
(statearr_36370_36414[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (35))){
var state_36338__$1 = state_36338;
var statearr_36371_36415 = state_36338__$1;
(statearr_36371_36415[(2)] = null);

(statearr_36371_36415[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (19))){
var inst_36291 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36291)){
var statearr_36372_36416 = state_36338__$1;
(statearr_36372_36416[(1)] = (22));

} else {
var statearr_36373_36417 = state_36338__$1;
(statearr_36373_36417[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (11))){
var inst_36262 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36374_36418 = state_36338__$1;
(statearr_36374_36418[(2)] = inst_36262);

(statearr_36374_36418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (9))){
var inst_36264 = figwheel.client.heads_up.clear.call(null);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(12),inst_36264);
} else {
if((state_val_36339 === (5))){
var inst_36255 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36338__$1 = state_36338;
var statearr_36375_36419 = state_36338__$1;
(statearr_36375_36419[(2)] = inst_36255);

(statearr_36375_36419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (14))){
var inst_36282 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36282)){
var statearr_36376_36420 = state_36338__$1;
(statearr_36376_36420[(1)] = (18));

} else {
var statearr_36377_36421 = state_36338__$1;
(statearr_36377_36421[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (26))){
var inst_36308 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36338__$1 = state_36338;
if(cljs.core.truth_(inst_36308)){
var statearr_36378_36422 = state_36338__$1;
(statearr_36378_36422[(1)] = (30));

} else {
var statearr_36379_36423 = state_36338__$1;
(statearr_36379_36423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (16))){
var inst_36274 = (state_36338[(2)]);
var inst_36275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36276 = figwheel.client.heads_up.display_exception.call(null,inst_36275);
var state_36338__$1 = (function (){var statearr_36380 = state_36338;
(statearr_36380[(13)] = inst_36274);

return statearr_36380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(17),inst_36276);
} else {
if((state_val_36339 === (30))){
var inst_36310 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36311 = figwheel.client.heads_up.display_warning.call(null,inst_36310);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(33),inst_36311);
} else {
if((state_val_36339 === (10))){
var inst_36268 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36381_36424 = state_36338__$1;
(statearr_36381_36424[(2)] = inst_36268);

(statearr_36381_36424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (18))){
var inst_36284 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36285 = figwheel.client.heads_up.display_exception.call(null,inst_36284);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(21),inst_36285);
} else {
if((state_val_36339 === (37))){
var inst_36321 = (state_36338[(2)]);
var state_36338__$1 = state_36338;
var statearr_36382_36425 = state_36338__$1;
(statearr_36382_36425[(2)] = inst_36321);

(statearr_36382_36425[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36339 === (8))){
var inst_36260 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36338__$1 = state_36338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36338__$1,(11),inst_36260);
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
});})(c__28397__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28285__auto__,c__28397__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____0 = (function (){
var statearr_36386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36386[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__);

(statearr_36386[(1)] = (1));

return statearr_36386;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____1 = (function (state_36338){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_36338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e36387){if((e36387 instanceof Object)){
var ex__28289__auto__ = e36387;
var statearr_36388_36426 = state_36338;
(statearr_36388_36426[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36427 = state_36338;
state_36338 = G__36427;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__ = function(state_36338){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____1.call(this,state_36338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__,msg_hist,msg_names,msg))
})();
var state__28399__auto__ = (function (){var statearr_36389 = f__28398__auto__.call(null);
(statearr_36389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_36389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__,msg_hist,msg_names,msg))
);

return c__28397__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28397__auto___36490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto___36490,ch){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto___36490,ch){
return (function (state_36473){
var state_val_36474 = (state_36473[(1)]);
if((state_val_36474 === (1))){
var state_36473__$1 = state_36473;
var statearr_36475_36491 = state_36473__$1;
(statearr_36475_36491[(2)] = null);

(statearr_36475_36491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36474 === (2))){
var state_36473__$1 = state_36473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36473__$1,(4),ch);
} else {
if((state_val_36474 === (3))){
var inst_36471 = (state_36473[(2)]);
var state_36473__$1 = state_36473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36473__$1,inst_36471);
} else {
if((state_val_36474 === (4))){
var inst_36461 = (state_36473[(7)]);
var inst_36461__$1 = (state_36473[(2)]);
var state_36473__$1 = (function (){var statearr_36476 = state_36473;
(statearr_36476[(7)] = inst_36461__$1);

return statearr_36476;
})();
if(cljs.core.truth_(inst_36461__$1)){
var statearr_36477_36492 = state_36473__$1;
(statearr_36477_36492[(1)] = (5));

} else {
var statearr_36478_36493 = state_36473__$1;
(statearr_36478_36493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36474 === (5))){
var inst_36461 = (state_36473[(7)]);
var inst_36463 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36461);
var state_36473__$1 = state_36473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36473__$1,(8),inst_36463);
} else {
if((state_val_36474 === (6))){
var state_36473__$1 = state_36473;
var statearr_36479_36494 = state_36473__$1;
(statearr_36479_36494[(2)] = null);

(statearr_36479_36494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36474 === (7))){
var inst_36469 = (state_36473[(2)]);
var state_36473__$1 = state_36473;
var statearr_36480_36495 = state_36473__$1;
(statearr_36480_36495[(2)] = inst_36469);

(statearr_36480_36495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36474 === (8))){
var inst_36465 = (state_36473[(2)]);
var state_36473__$1 = (function (){var statearr_36481 = state_36473;
(statearr_36481[(8)] = inst_36465);

return statearr_36481;
})();
var statearr_36482_36496 = state_36473__$1;
(statearr_36482_36496[(2)] = null);

(statearr_36482_36496[(1)] = (2));


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
});})(c__28397__auto___36490,ch))
;
return ((function (switch__28285__auto__,c__28397__auto___36490,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28286__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28286__auto____0 = (function (){
var statearr_36486 = [null,null,null,null,null,null,null,null,null];
(statearr_36486[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28286__auto__);

(statearr_36486[(1)] = (1));

return statearr_36486;
});
var figwheel$client$heads_up_plugin_$_state_machine__28286__auto____1 = (function (state_36473){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_36473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e36487){if((e36487 instanceof Object)){
var ex__28289__auto__ = e36487;
var statearr_36488_36497 = state_36473;
(statearr_36488_36497[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36498 = state_36473;
state_36473 = G__36498;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28286__auto__ = function(state_36473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28286__auto____1.call(this,state_36473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28286__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28286__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto___36490,ch))
})();
var state__28399__auto__ = (function (){var statearr_36489 = f__28398__auto__.call(null);
(statearr_36489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto___36490);

return statearr_36489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto___36490,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__){
return (function (state_36519){
var state_val_36520 = (state_36519[(1)]);
if((state_val_36520 === (1))){
var inst_36514 = cljs.core.async.timeout.call(null,(3000));
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36519__$1,(2),inst_36514);
} else {
if((state_val_36520 === (2))){
var inst_36516 = (state_36519[(2)]);
var inst_36517 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36519__$1 = (function (){var statearr_36521 = state_36519;
(statearr_36521[(7)] = inst_36516);

return statearr_36521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36519__$1,inst_36517);
} else {
return null;
}
}
});})(c__28397__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____0 = (function (){
var statearr_36525 = [null,null,null,null,null,null,null,null];
(statearr_36525[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__);

(statearr_36525[(1)] = (1));

return statearr_36525;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____1 = (function (state_36519){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_36519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e36526){if((e36526 instanceof Object)){
var ex__28289__auto__ = e36526;
var statearr_36527_36529 = state_36519;
(statearr_36527_36529[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36530 = state_36519;
state_36519 = G__36530;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__ = function(state_36519){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____1.call(this,state_36519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28286__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__))
})();
var state__28399__auto__ = (function (){var statearr_36528 = f__28398__auto__.call(null);
(statearr_36528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_36528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__))
);

return c__28397__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28397__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28397__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28398__auto__ = (function (){var switch__28285__auto__ = ((function (c__28397__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36553){
var state_val_36554 = (state_36553[(1)]);
if((state_val_36554 === (1))){
var inst_36547 = cljs.core.async.timeout.call(null,(2000));
var state_36553__$1 = state_36553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36553__$1,(2),inst_36547);
} else {
if((state_val_36554 === (2))){
var inst_36549 = (state_36553[(2)]);
var inst_36550 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36551 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36550);
var state_36553__$1 = (function (){var statearr_36555 = state_36553;
(statearr_36555[(7)] = inst_36549);

return statearr_36555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36553__$1,inst_36551);
} else {
return null;
}
}
});})(c__28397__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28285__auto__,c__28397__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____0 = (function (){
var statearr_36559 = [null,null,null,null,null,null,null,null];
(statearr_36559[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__);

(statearr_36559[(1)] = (1));

return statearr_36559;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____1 = (function (state_36553){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__.call(null,state_36553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e36560){if((e36560 instanceof Object)){
var ex__28289__auto__ = e36560;
var statearr_36561_36563 = state_36553;
(statearr_36561_36563[(5)] = ex__28289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36564 = state_36553;
state_36553 = G__36564;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__ = function(state_36553){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____1.call(this,state_36553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28286__auto__;
})()
;})(switch__28285__auto__,c__28397__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28399__auto__ = (function (){var statearr_36562 = f__28398__auto__.call(null);
(statearr_36562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28397__auto__);

return statearr_36562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28399__auto__);
});})(c__28397__auto__,figwheel_version,temp__4657__auto__))
);

return c__28397__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36565){
var map__36569 = p__36565;
var map__36569__$1 = ((((!((map__36569 == null)))?((((map__36569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36569):map__36569);
var file = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36571 = "";
var G__36571__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36571),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36571);
var G__36571__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36571__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36571__$1);
if(cljs.core.truth_((function (){var and__24760__auto__ = line;
if(cljs.core.truth_(and__24760__auto__)){
return column;
} else {
return and__24760__auto__;
}
})())){
return [cljs.core.str(G__36571__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36571__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36572){
var map__36579 = p__36572;
var map__36579__$1 = ((((!((map__36579 == null)))?((((map__36579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36579):map__36579);
var ed = map__36579__$1;
var formatted_exception = cljs.core.get.call(null,map__36579__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36579__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36579__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36581_36585 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36582_36586 = null;
var count__36583_36587 = (0);
var i__36584_36588 = (0);
while(true){
if((i__36584_36588 < count__36583_36587)){
var msg_36589 = cljs.core._nth.call(null,chunk__36582_36586,i__36584_36588);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36589);

var G__36590 = seq__36581_36585;
var G__36591 = chunk__36582_36586;
var G__36592 = count__36583_36587;
var G__36593 = (i__36584_36588 + (1));
seq__36581_36585 = G__36590;
chunk__36582_36586 = G__36591;
count__36583_36587 = G__36592;
i__36584_36588 = G__36593;
continue;
} else {
var temp__4657__auto___36594 = cljs.core.seq.call(null,seq__36581_36585);
if(temp__4657__auto___36594){
var seq__36581_36595__$1 = temp__4657__auto___36594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36581_36595__$1)){
var c__25583__auto___36596 = cljs.core.chunk_first.call(null,seq__36581_36595__$1);
var G__36597 = cljs.core.chunk_rest.call(null,seq__36581_36595__$1);
var G__36598 = c__25583__auto___36596;
var G__36599 = cljs.core.count.call(null,c__25583__auto___36596);
var G__36600 = (0);
seq__36581_36585 = G__36597;
chunk__36582_36586 = G__36598;
count__36583_36587 = G__36599;
i__36584_36588 = G__36600;
continue;
} else {
var msg_36601 = cljs.core.first.call(null,seq__36581_36595__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36601);

var G__36602 = cljs.core.next.call(null,seq__36581_36595__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__36581_36585 = G__36602;
chunk__36582_36586 = G__36603;
count__36583_36587 = G__36604;
i__36584_36588 = G__36605;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36606){
var map__36609 = p__36606;
var map__36609__$1 = ((((!((map__36609 == null)))?((((map__36609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36609):map__36609);
var w = map__36609__$1;
var message = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24760__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24760__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24760__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36621 = cljs.core.seq.call(null,plugins);
var chunk__36622 = null;
var count__36623 = (0);
var i__36624 = (0);
while(true){
if((i__36624 < count__36623)){
var vec__36625 = cljs.core._nth.call(null,chunk__36622,i__36624);
var k = cljs.core.nth.call(null,vec__36625,(0),null);
var plugin = cljs.core.nth.call(null,vec__36625,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36631 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36621,chunk__36622,count__36623,i__36624,pl_36631,vec__36625,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36631.call(null,msg_hist);
});})(seq__36621,chunk__36622,count__36623,i__36624,pl_36631,vec__36625,k,plugin))
);
} else {
}

var G__36632 = seq__36621;
var G__36633 = chunk__36622;
var G__36634 = count__36623;
var G__36635 = (i__36624 + (1));
seq__36621 = G__36632;
chunk__36622 = G__36633;
count__36623 = G__36634;
i__36624 = G__36635;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36621);
if(temp__4657__auto__){
var seq__36621__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36621__$1)){
var c__25583__auto__ = cljs.core.chunk_first.call(null,seq__36621__$1);
var G__36636 = cljs.core.chunk_rest.call(null,seq__36621__$1);
var G__36637 = c__25583__auto__;
var G__36638 = cljs.core.count.call(null,c__25583__auto__);
var G__36639 = (0);
seq__36621 = G__36636;
chunk__36622 = G__36637;
count__36623 = G__36638;
i__36624 = G__36639;
continue;
} else {
var vec__36628 = cljs.core.first.call(null,seq__36621__$1);
var k = cljs.core.nth.call(null,vec__36628,(0),null);
var plugin = cljs.core.nth.call(null,vec__36628,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36640 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36621,chunk__36622,count__36623,i__36624,pl_36640,vec__36628,k,plugin,seq__36621__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36640.call(null,msg_hist);
});})(seq__36621,chunk__36622,count__36623,i__36624,pl_36640,vec__36628,k,plugin,seq__36621__$1,temp__4657__auto__))
);
} else {
}

var G__36641 = cljs.core.next.call(null,seq__36621__$1);
var G__36642 = null;
var G__36643 = (0);
var G__36644 = (0);
seq__36621 = G__36641;
chunk__36622 = G__36642;
count__36623 = G__36643;
i__36624 = G__36644;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36645 = [];
var len__25847__auto___36652 = arguments.length;
var i__25848__auto___36653 = (0);
while(true){
if((i__25848__auto___36653 < len__25847__auto___36652)){
args36645.push((arguments[i__25848__auto___36653]));

var G__36654 = (i__25848__auto___36653 + (1));
i__25848__auto___36653 = G__36654;
continue;
} else {
}
break;
}

var G__36647 = args36645.length;
switch (G__36647) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36645.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36648_36656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36649_36657 = null;
var count__36650_36658 = (0);
var i__36651_36659 = (0);
while(true){
if((i__36651_36659 < count__36650_36658)){
var msg_36660 = cljs.core._nth.call(null,chunk__36649_36657,i__36651_36659);
figwheel.client.socket.handle_incoming_message.call(null,msg_36660);

var G__36661 = seq__36648_36656;
var G__36662 = chunk__36649_36657;
var G__36663 = count__36650_36658;
var G__36664 = (i__36651_36659 + (1));
seq__36648_36656 = G__36661;
chunk__36649_36657 = G__36662;
count__36650_36658 = G__36663;
i__36651_36659 = G__36664;
continue;
} else {
var temp__4657__auto___36665 = cljs.core.seq.call(null,seq__36648_36656);
if(temp__4657__auto___36665){
var seq__36648_36666__$1 = temp__4657__auto___36665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36648_36666__$1)){
var c__25583__auto___36667 = cljs.core.chunk_first.call(null,seq__36648_36666__$1);
var G__36668 = cljs.core.chunk_rest.call(null,seq__36648_36666__$1);
var G__36669 = c__25583__auto___36667;
var G__36670 = cljs.core.count.call(null,c__25583__auto___36667);
var G__36671 = (0);
seq__36648_36656 = G__36668;
chunk__36649_36657 = G__36669;
count__36650_36658 = G__36670;
i__36651_36659 = G__36671;
continue;
} else {
var msg_36672 = cljs.core.first.call(null,seq__36648_36666__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36672);

var G__36673 = cljs.core.next.call(null,seq__36648_36666__$1);
var G__36674 = null;
var G__36675 = (0);
var G__36676 = (0);
seq__36648_36656 = G__36673;
chunk__36649_36657 = G__36674;
count__36650_36658 = G__36675;
i__36651_36659 = G__36676;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25854__auto__ = [];
var len__25847__auto___36681 = arguments.length;
var i__25848__auto___36682 = (0);
while(true){
if((i__25848__auto___36682 < len__25847__auto___36681)){
args__25854__auto__.push((arguments[i__25848__auto___36682]));

var G__36683 = (i__25848__auto___36682 + (1));
i__25848__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var argseq__25855__auto__ = ((((0) < args__25854__auto__.length))?(new cljs.core.IndexedSeq(args__25854__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25855__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36678){
var map__36679 = p__36678;
var map__36679__$1 = ((((!((map__36679 == null)))?((((map__36679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36679):map__36679);
var opts = map__36679__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36677){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36677));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36685){if((e36685 instanceof Error)){
var e = e36685;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36685;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36689){
var map__36690 = p__36689;
var map__36690__$1 = ((((!((map__36690 == null)))?((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36690):map__36690);
var msg_name = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506684309910