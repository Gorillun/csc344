%Keith Fosmire
%Part B Prolog
%Incomplete
%

:- consult('process.p').


calculate(Value) -->pronoun(V1),digit(V2),[plus],digit(V3),{Value is V2+V3}.
calculate(Value) -->pronoun(V1),digit(V2),[minus],digit(V3),{Value is V2-V3}.
calculate(Value) -->pronoun(V1),digit(V2),[times],digit(V3),{Value is V2*V3}.
calculate(Value) -->pronoun(V1),digit(V2),[divided],[by],digit(V3),{Value is V2/V3}.


adverb(Value)-->[much],
determiner(V1),{Value is V1}.
adverb(37)-->[add].
pronoun(Value)-->[how],
adverb(V1), {Value is V1}.
pronoun(2)-->[what].
determiner(Value)-->[is].

digit(Value) --> [one],
zeros(V1),{Value is 1*V1}.
digit(Value)-->[two] ,
zeros(V1),{Value is 2*V1}.
digit(Value) --> [three],
zeros(V1),{Value is 3*V1}.
digit(Value) --> [four],
zeros(V1),{Value is 4*V1}.
digit(Value) --> [five],
zeros(V1),{Value is 5*V1}.
digit(Value) --> [six],
zeros(V1),{Value is 6*V1}.
digit(Value) --> [seven],
zeros(V1),{Value is 7*V1}.
digit(Value) --> [eight],
zeros(V1),{Value is 8*V1}.
digit(Value) --> [nine],
zeros(V1),{Value is 9*V1}.
digit(Value)-->[ten],
zeros(V1),{Value is 10*V1}.
digit(Value)-->[eleven],
zeros(V1),{Value is 11*V1}.
digit(Value)-->[twelve],
zeros(V1),{Value is 12*V1}.
digit(Value) --> [thirteen],
zeros(V1),{Value is 13*V1}.
digit(Value) --> [fourteen],
zeros(V1),{Value is 14*V1}.
digit(Value)-->[fifteen],
zeros(V1),{Value is 15*V1}.
digit(Value)-->[sixteen],
zeros(V1),{Value is 16*V1}.
digit(Value)-->[seventeen],
zeros(V1),{Value is 17*V1}.
digit(Value) --> [eighteen],
zeros(V1),{Value is 18*V1}.
digit(Value) --> [nineteen],
zeros(V1),{Value is 19*V1}.
digit(Value) -->[twenty],
sdigit(V1),{Value is 20+V1}.
digit(Value) --> [thirty],
sdigit(V1),{Value is  30 + V1}.
digit(Value) --> [forty],
sdigit(V1),{Value is 40 + V1}.
digit(Value) --> [fifty],
sdigit(V1),{Value is 50 + V1}.
digit(Value) --> [sixty],
sdigit(V1),{Value is 60 + V1}.
digit(Value) --> [seventy],
sdigit(V1),{Value is 70 + V1}.
digit(Value) --> [eighty],
sdigit(V1),{Value is 80 + V1}.
digit(Value) --> [ninety],
sdigit(V1),{Value is 90 + V1}.
sdigit(1) --> [one].
sdigit(2)-->[two] .
sdigit(3) --> [three].
sdigit(4) --> [four].
sdigit(5) --> [five].
sdigit(6) --> [six].
sdigit(7) --> [seven].
sdigit(8) --> [eight].
sdigit(9) --> [nine].
zeros(Value)-->[hundred],
{Value is 100}.
zeros(Value)-->[thousand],{Value is 1000}.
zeros(Value)-->[_],{Value is 1}.
