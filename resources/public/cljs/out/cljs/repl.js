// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33695){
var map__33720 = p__33695;
var map__33720__$1 = ((((!((map__33720 == null)))?((((map__33720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33720):map__33720);
var m = map__33720__$1;
var n = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33722_33744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33723_33745 = null;
var count__33724_33746 = (0);
var i__33725_33747 = (0);
while(true){
if((i__33725_33747 < count__33724_33746)){
var f_33748 = cljs.core._nth.call(null,chunk__33723_33745,i__33725_33747);
cljs.core.println.call(null,"  ",f_33748);

var G__33749 = seq__33722_33744;
var G__33750 = chunk__33723_33745;
var G__33751 = count__33724_33746;
var G__33752 = (i__33725_33747 + (1));
seq__33722_33744 = G__33749;
chunk__33723_33745 = G__33750;
count__33724_33746 = G__33751;
i__33725_33747 = G__33752;
continue;
} else {
var temp__4657__auto___33753 = cljs.core.seq.call(null,seq__33722_33744);
if(temp__4657__auto___33753){
var seq__33722_33754__$1 = temp__4657__auto___33753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33722_33754__$1)){
var c__25583__auto___33755 = cljs.core.chunk_first.call(null,seq__33722_33754__$1);
var G__33756 = cljs.core.chunk_rest.call(null,seq__33722_33754__$1);
var G__33757 = c__25583__auto___33755;
var G__33758 = cljs.core.count.call(null,c__25583__auto___33755);
var G__33759 = (0);
seq__33722_33744 = G__33756;
chunk__33723_33745 = G__33757;
count__33724_33746 = G__33758;
i__33725_33747 = G__33759;
continue;
} else {
var f_33760 = cljs.core.first.call(null,seq__33722_33754__$1);
cljs.core.println.call(null,"  ",f_33760);

var G__33761 = cljs.core.next.call(null,seq__33722_33754__$1);
var G__33762 = null;
var G__33763 = (0);
var G__33764 = (0);
seq__33722_33744 = G__33761;
chunk__33723_33745 = G__33762;
count__33724_33746 = G__33763;
i__33725_33747 = G__33764;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33765 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24772__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24772__auto__)){
return or__24772__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33765);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33765)))?cljs.core.second.call(null,arglists_33765):arglists_33765));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33726_33766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33727_33767 = null;
var count__33728_33768 = (0);
var i__33729_33769 = (0);
while(true){
if((i__33729_33769 < count__33728_33768)){
var vec__33730_33770 = cljs.core._nth.call(null,chunk__33727_33767,i__33729_33769);
var name_33771 = cljs.core.nth.call(null,vec__33730_33770,(0),null);
var map__33733_33772 = cljs.core.nth.call(null,vec__33730_33770,(1),null);
var map__33733_33773__$1 = ((((!((map__33733_33772 == null)))?((((map__33733_33772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33733_33772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33733_33772):map__33733_33772);
var doc_33774 = cljs.core.get.call(null,map__33733_33773__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33775 = cljs.core.get.call(null,map__33733_33773__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33771);

cljs.core.println.call(null," ",arglists_33775);

if(cljs.core.truth_(doc_33774)){
cljs.core.println.call(null," ",doc_33774);
} else {
}

var G__33776 = seq__33726_33766;
var G__33777 = chunk__33727_33767;
var G__33778 = count__33728_33768;
var G__33779 = (i__33729_33769 + (1));
seq__33726_33766 = G__33776;
chunk__33727_33767 = G__33777;
count__33728_33768 = G__33778;
i__33729_33769 = G__33779;
continue;
} else {
var temp__4657__auto___33780 = cljs.core.seq.call(null,seq__33726_33766);
if(temp__4657__auto___33780){
var seq__33726_33781__$1 = temp__4657__auto___33780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33726_33781__$1)){
var c__25583__auto___33782 = cljs.core.chunk_first.call(null,seq__33726_33781__$1);
var G__33783 = cljs.core.chunk_rest.call(null,seq__33726_33781__$1);
var G__33784 = c__25583__auto___33782;
var G__33785 = cljs.core.count.call(null,c__25583__auto___33782);
var G__33786 = (0);
seq__33726_33766 = G__33783;
chunk__33727_33767 = G__33784;
count__33728_33768 = G__33785;
i__33729_33769 = G__33786;
continue;
} else {
var vec__33735_33787 = cljs.core.first.call(null,seq__33726_33781__$1);
var name_33788 = cljs.core.nth.call(null,vec__33735_33787,(0),null);
var map__33738_33789 = cljs.core.nth.call(null,vec__33735_33787,(1),null);
var map__33738_33790__$1 = ((((!((map__33738_33789 == null)))?((((map__33738_33789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33738_33789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738_33789):map__33738_33789);
var doc_33791 = cljs.core.get.call(null,map__33738_33790__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33792 = cljs.core.get.call(null,map__33738_33790__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33788);

cljs.core.println.call(null," ",arglists_33792);

if(cljs.core.truth_(doc_33791)){
cljs.core.println.call(null," ",doc_33791);
} else {
}

var G__33793 = cljs.core.next.call(null,seq__33726_33781__$1);
var G__33794 = null;
var G__33795 = (0);
var G__33796 = (0);
seq__33726_33766 = G__33793;
chunk__33727_33767 = G__33794;
count__33728_33768 = G__33795;
i__33729_33769 = G__33796;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33740 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33741 = null;
var count__33742 = (0);
var i__33743 = (0);
while(true){
if((i__33743 < count__33742)){
var role = cljs.core._nth.call(null,chunk__33741,i__33743);
var temp__4657__auto___33797__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33797__$1)){
var spec_33798 = temp__4657__auto___33797__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33798));
} else {
}

var G__33799 = seq__33740;
var G__33800 = chunk__33741;
var G__33801 = count__33742;
var G__33802 = (i__33743 + (1));
seq__33740 = G__33799;
chunk__33741 = G__33800;
count__33742 = G__33801;
i__33743 = G__33802;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33740);
if(temp__4657__auto____$1){
var seq__33740__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33740__$1)){
var c__25583__auto__ = cljs.core.chunk_first.call(null,seq__33740__$1);
var G__33803 = cljs.core.chunk_rest.call(null,seq__33740__$1);
var G__33804 = c__25583__auto__;
var G__33805 = cljs.core.count.call(null,c__25583__auto__);
var G__33806 = (0);
seq__33740 = G__33803;
chunk__33741 = G__33804;
count__33742 = G__33805;
i__33743 = G__33806;
continue;
} else {
var role = cljs.core.first.call(null,seq__33740__$1);
var temp__4657__auto___33807__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33807__$2)){
var spec_33808 = temp__4657__auto___33807__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33808));
} else {
}

var G__33809 = cljs.core.next.call(null,seq__33740__$1);
var G__33810 = null;
var G__33811 = (0);
var G__33812 = (0);
seq__33740 = G__33809;
chunk__33741 = G__33810;
count__33742 = G__33811;
i__33743 = G__33812;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1506684306984