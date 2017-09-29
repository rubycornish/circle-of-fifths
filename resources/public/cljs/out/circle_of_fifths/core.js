// Compiled by ClojureScript 1.9.227 {}
goog.provide('circle_of_fifths.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
circle_of_fifths.core.parametric_x = (function circle_of_fifths$core$parametric_x(x,r,a){

return (x + (r * quil.core.cos.call(null,quil.core.radians.call(null,a))));
});
circle_of_fifths.core.parametric_y = (function circle_of_fifths$core$parametric_y(y,r,a){

return (y + (r * quil.core.sin.call(null,quil.core.radians.call(null,a))));
});
circle_of_fifths.core.notes = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"], null));
circle_of_fifths.core.interval = (function circle_of_fifths$core$interval(semitones,note){

return cljs.core.first.call(null,cljs.core.drop.call(null,semitones,cljs.core.drop_while.call(null,(function (p1__34796_SHARP_){
return cljs.core.not_EQ_.call(null,note,p1__34796_SHARP_);
}),circle_of_fifths.core.notes)));
});
circle_of_fifths.core.maj_second = (function circle_of_fifths$core$maj_second(n){
return circle_of_fifths.core.interval.call(null,(2),n);
});
circle_of_fifths.core.maj_third = (function circle_of_fifths$core$maj_third(n){
return circle_of_fifths.core.interval.call(null,(4),n);
});
circle_of_fifths.core.fourth = (function circle_of_fifths$core$fourth(n){
return circle_of_fifths.core.interval.call(null,(5),n);
});
circle_of_fifths.core.fifth = (function circle_of_fifths$core$fifth(n){
return circle_of_fifths.core.interval.call(null,(7),n);
});
circle_of_fifths.core.octave = (function circle_of_fifths$core$octave(n){
return circle_of_fifths.core.interval.call(null,(12),n);
});
circle_of_fifths.core.canvas_width = (1600);
circle_of_fifths.core.canvas_height = (900);
circle_of_fifths.core.percentage_of_canvas_height = 0.9;
circle_of_fifths.core.circle_diameter = (circle_of_fifths.core.canvas_height * circle_of_fifths.core.percentage_of_canvas_height);
circle_of_fifths.core.note_circle_diameter = (circle_of_fifths.core.canvas_height * 0.5);
circle_of_fifths.core.setup = (function circle_of_fifths$core$setup(){

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
});
circle_of_fifths.core.update_state = (function circle_of_fifths$core$update_state(state){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
});
circle_of_fifths.core.draw_arc = (function circle_of_fifths$core$draw_arc(x,y,d,beg,end){

var r = (d / (2));
quil.core.arc.call(null,x,y,d,d,quil.core.radians.call(null,beg),quil.core.radians.call(null,end));

quil.core.line.call(null,x,y,circle_of_fifths.core.parametric_x.call(null,x,r,beg),circle_of_fifths.core.parametric_y.call(null,y,r,beg));

return quil.core.line.call(null,x,y,circle_of_fifths.core.parametric_x.call(null,x,r,end),circle_of_fifths.core.parametric_y.call(null,y,r,end));
});
circle_of_fifths.core.draw_12_arcs = (function circle_of_fifths$core$draw_12_arcs(x,y,d){

var beg_angles = cljs.core.range.call(null,(15),(346),(30));
var end_angles = cljs.core.range.call(null,(45),(376),(30));
quil.core.fill.call(null,(255),(255),(255));

quil.core.stroke.call(null,(0),(0),(0));

return cljs.core.dorun.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,circle_of_fifths.core.draw_arc,x,y,d),beg_angles,end_angles));
});
circle_of_fifths.core.draw_note = (function circle_of_fifths$core$draw_note(x,y,r,a,n){

var x__$1 = circle_of_fifths.core.parametric_x.call(null,x,r,a);
var y__$1 = circle_of_fifths.core.parametric_y.call(null,y,r,a);
var tr__26318__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26318__auto__);

var tr__26324__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.radians.call(null,(a + (90)))], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__26324__auto__);

return quil.core.text.call(null,n,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
circle_of_fifths.core.draw_12_notes = (function circle_of_fifths$core$draw_12_notes(x,y,d,n){

var notes = cljs.core.take.call(null,(12),cljs.core.iterate.call(null,circle_of_fifths.core.fifth,n));
var angles = cljs.core.range.call(null,(-90),(271),(30));
var r = (d / (2));
quil.core.fill.call(null,(0),(0),(0));

quil.core.text_font.call(null,"sans-serif",(60));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

return cljs.core.dorun.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,circle_of_fifths.core.draw_note,x,y,(r - (35))),angles,notes));
});
circle_of_fifths.core.draw_note_circle = (function circle_of_fifths$core$draw_note_circle(x,y,d,n){

quil.core.stroke_weight.call(null,(2));

circle_of_fifths.core.draw_12_arcs.call(null,x,y,d);

return circle_of_fifths.core.draw_12_notes.call(null,x,y,d,n);
});
circle_of_fifths.core.draw_state = (function circle_of_fifths$core$draw_state(state){

quil.core.background.call(null,(240));

quil.core.fill.call(null,(100),(100),(100));

return circle_of_fifths.core.draw_note_circle.call(null,(circle_of_fifths.core.canvas_width / (2)),(circle_of_fifths.core.canvas_height / (2)),circle_of_fifths.core.note_circle_diameter,"C");
});
circle_of_fifths.core.my = (function circle_of_fifths$core$my(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"circle-of-fifths",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,circle_of_fifths.core.update_state))?(function() { 
var G__34797__delegate = function (args){
return cljs.core.apply.call(null,circle_of_fifths.core.update_state,args);
};
var G__34797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34798__i = 0, G__34798__a = new Array(arguments.length -  0);
while (G__34798__i < G__34798__a.length) {G__34798__a[G__34798__i] = arguments[G__34798__i + 0]; ++G__34798__i;}
  args = new cljs.core.IndexedSeq(G__34798__a,0);
} 
return G__34797__delegate.call(this,args);};
G__34797.cljs$lang$maxFixedArity = 0;
G__34797.cljs$lang$applyTo = (function (arglist__34799){
var args = cljs.core.seq(arglist__34799);
return G__34797__delegate(args);
});
G__34797.cljs$core$IFn$_invoke$arity$variadic = G__34797__delegate;
return G__34797;
})()
:circle_of_fifths.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [circle_of_fifths.core.canvas_width,circle_of_fifths.core.canvas_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,circle_of_fifths.core.setup))?(function() { 
var G__34800__delegate = function (args){
return cljs.core.apply.call(null,circle_of_fifths.core.setup,args);
};
var G__34800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34801__i = 0, G__34801__a = new Array(arguments.length -  0);
while (G__34801__i < G__34801__a.length) {G__34801__a[G__34801__i] = arguments[G__34801__i + 0]; ++G__34801__i;}
  args = new cljs.core.IndexedSeq(G__34801__a,0);
} 
return G__34800__delegate.call(this,args);};
G__34800.cljs$lang$maxFixedArity = 0;
G__34800.cljs$lang$applyTo = (function (arglist__34802){
var args = cljs.core.seq(arglist__34802);
return G__34800__delegate(args);
});
G__34800.cljs$core$IFn$_invoke$arity$variadic = G__34800__delegate;
return G__34800;
})()
:circle_of_fifths.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,circle_of_fifths.core.draw_state))?(function() { 
var G__34803__delegate = function (args){
return cljs.core.apply.call(null,circle_of_fifths.core.draw_state,args);
};
var G__34803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34804__i = 0, G__34804__a = new Array(arguments.length -  0);
while (G__34804__i < G__34804__a.length) {G__34804__a[G__34804__i] = arguments[G__34804__i + 0]; ++G__34804__i;}
  args = new cljs.core.IndexedSeq(G__34804__a,0);
} 
return G__34803__delegate.call(this,args);};
G__34803.cljs$lang$maxFixedArity = 0;
G__34803.cljs$lang$applyTo = (function (arglist__34805){
var args = cljs.core.seq(arglist__34805);
return G__34803__delegate(args);
});
G__34803.cljs$core$IFn$_invoke$arity$variadic = G__34803__delegate;
return G__34803;
})()
:circle_of_fifths.core.draw_state));
});
goog.exportSymbol('circle_of_fifths.core.my', circle_of_fifths.core.my);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25931__25932__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25931__25932__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),circle_of_fifths.core.my,new cljs.core.Keyword(null,"host-id","host-id",742376279),"circle-of-fifths"], null));
}

//# sourceMappingURL=core.js.map?rel=1506698430134