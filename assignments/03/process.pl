% File:  process.p
%      - processing predicates

:- consult('io.p').

butlast([_],[]).
butlast([X|Xs],[X|Ys]) :-
  butlast(Xs,Ys).

doit(F) :-
   seeing(Keyboard),
   see(F),
   cvt,
   see(Keyboard).

cvt :- 
  read_sentence(Sentence),
  butlast(Sentence,Sentenc),
  Sentenc \== [quit],
  write_sentence(Sentenc), !,
  (
     phrase(calculate(Value),Sentenc,[]),
     write(Value);
     write_string(" -- translation failed")
  ),
  nl,
  cvt.

cvt.