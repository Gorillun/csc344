Script started on Mon Feb 17 19:21:15 2014
altair - kfosmire - b > cat fraction.c
//Keith Fosmire
//CSC 344 Assignment 1b
//Due 12 February 2014

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>



//calculates then displays results
display(int count,char in[])
{
        int charCount = strlen(in);
        int i=0;
        int j;
        if(charCount>=count)
        {
                while(count!=0)
                {
                        printf("%c",in[i]);
                        --count;
                        ++i;
                }
        }
        else
        {//if count is higher than the char length
                while(count!=0)
                {
                        if(count<charCount)//once charCount is less than count
                                charCount=count;
                        for(j=0;j<charCount;++j)
                        {
                                printf("%c",in[j]);
                                --count;
                        }
                }
        }
                
        printf("\n");
}
main(int argc, char *argv[])
{
        int numerator; //obvious
        int denominator;//obvious
        int charCount;//yep..count of char
        float multiplier;// result for multiplying
        char first[12]; //char string for first element
        char second[12]; //char string for second element
        char third[12];// char string for third element
        char fourth[12];//char string for fourth
        //making a decision on what function to call
        if(argc==4)
        {
                
                strcpy(second,argv[1]);//copy strings
                strcpy(third,argv[2]);//copy strings
                strcpy(fourth,argv[3]);//copy strings
                numerator = atoi(third);;//convert to int
                denominator = atoi(fourth);//convert to int
                charCount = strlen(second);//getting char length
                multiplier =((float)numerator / (float)denominator)*(float)charCount;
                display((int)multiplier,second);
        
        }
        
        else//prints if does not meet prior conditions
                printf("USAGE: fraction string numerator denominator\n");

        
        return 0;
} 

altair - kfosmire - b > emacs fraction.c










[?1h=[H[2J[18;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundament[m
[A[H[>0c[19;1H("emacs" "fraction.c")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction [m
[A
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[K
[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Lisp Inte[m
[A[H
[19;1Hem, type C-h C-a.[K[17;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Lisp Inte[m
For information about GNU Emacs and the GNU syst\
[H
[19;1Hem, type C-h C-a.[K[H[7mFile Edit Options Buffers Tools C Help           [m
[A
[1m//Keith Fosmire                                  [m
[A
[1m//CSC 344 Assignment 1b                          [m
[A
[1m//Due 12 February 2014                           [m
[A
[K
[1m#include[m <stdio.h>[m[K
[1m#include[m <stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[K
[K
[K
[1m//calculates then displays results               [m
[A
[7m[1mdisplay[m([1m[4mint[m [1mcount[m,[1m[4mchar[m [1min[m[])[K
{[K
        [1m[4mint[m [1mcharCount[m = strlen(in);[K
[7m-=--(DOS)----F1  [m[7m[1mfraction.c  [m[7m   Top L1     (C/l A[m
[A
For information about GNU Emacs and the GNU syst\
[A[H
[19;1H[K[A[A        [1m[4mint[m [1mi[m=0;[K
[7m-=--(DOS)----F1  [m[7m[1mfraction.c  [m[7m   Top L2     (C/l A[m
[H

[18;38H[7m3[m[4;1H[18;38H[7m4[m[5;1H/[18;10H[7m**[m[5;2H[14;1Hdisplay[5;2H[1m/*                                               [m
[1m#include <stdio.h>                               [m
[5;3H

[1m#include <stdlib.h>                              [m
[1m#include <ctype.h>                               [m
[1m#include <string.h>                              [m
[1m                                                 [m
[1m                                                 [m
[1m                                                 [m

[1mdisplay(int count,char in[])                     [m
[1m{                                                [m
[1m        int charCount = strlen(in);              [m
[1m        int i=0;                                 [m
[5;3H[C[1mT[m[1mh[m[1mi[m[1ms[m[C[1mp[m[1mr[m[1mo[m[1mg[m[1mr[m[1ma[m[1mm[m[C[1mi[m[1ms[m[C[1mu[m[1ms[m[1me[m[1md[m[C[1mt[m[1mo[m[C[1mg[m[1me[m[1mt[m[C[1mt[m[1mh[m[1me[m[C[1mf[m[1mr[m[1ma[m[1mc[m[1mt[m[1mi[m[1mo[m[1mn[m[C[1mo[m[1mf[m[C[1ma[m[K[1;17r[7;1H[1L[1;19r[5;49H\
[1m                  [m
[1m#include <stdio.h>                               [m
[A[6;2H[1mg[m[1mi[m[1mv[m[1me[m[1mn[m[C[1mS[m[1mt[m[1mr[m[1mi[m[1mn[m[1mg[m[1m.[m[C[1mi[m[1m [m[1m [m[1m [m[1mg[m[C[1mb[m[1my[m[C[1mg[m[1mi[m[1mv[m[1mi[m[1mn[m[1mg[m[C[1mt[m[1mh[m[1me[m[C[1ms[m[1m [m[1mS[m[1mt[m[1mr[m[1mi[m[1mn[m[1mg[m[C[1mt[m[1mh[m[1me[m[1mn[m[C[1mt[m[1mh[m[1me[m[C[1mn[m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[C[1m[[m[1ms[m[1mp[m[1ma[m[1mc[m[1me[m[1m][m[6;36H[6;43H[C[1mn[m[1mu[m[1mm[m[1me[m[1mr[m[K[1;17r[8;1H[1L[1;19r[6;49H\
[1ma                 [m
[1m#include <stdio.h>                               [m
[A[7;2H[1mt[m[1mo[m[1mr[m[C[1m[[m[1ms[m[1mp[m[1ma[m[1mc[m[1me[m[1m][m[7;6H[7;13H[C[1md[m[1me[m[1mn[m[1mo[m[1mm[m[1mi[m[1mn[m[1ma[m[1mt[m[1mo[m[1mr[m[1m.[m[C[1m*[m[1m/[m[K
[1m#include[m <stdio.h>[m[K[7;29H

[1m#include[m <stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[K
[K
[K

[7m[1mdisplay[m([1m[4mint[m [1mcount[m,[1m[4mchar[m [1min[m[])[K
{[K[7;29H[19;1Hor C-h) [16;1H[7m-=--(DOS)**--F1  [m[7m[1mfraction.c  [m[7m   Top L4     (C/l A[m
Save file /home/kfosmire/public_html/csc344/assi\
gnments/01/b/fraction.c? (y, n, !, ., q, C-r, d \
[19;9Hor C-h) y[17;1HSave file /home/kfosmire/public_html/csc344/assi
gnments/01/b/fraction.c? (y, n, !, ., q, C-r, d [19;10H[K[17;4Hing file /home/kfosmire/public_html/csc344/as
signments/01/b/fraction.c...[K[7;29H[17;1HWrote /home/kfosmire/public_html/csc344/assignme
nts/01/b/fraction.c[K[7;29H[16;1H[7m[1mdisplay[m([1m[4mint[m [1mcount[m,[1m[4mchar[m [1min[m[])[K
{[K
[7m-=--(DOS)----F1  [m[7m[1mfraction.c  [m[7m   Top L4     (C/l A[m
[7;29H[19;1H[K[?1l>altair - kfosmire - b > emacs fraction.c[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Kmake
gcc  -c  fraction.c
gcc  -o fraction fraction.o 
altair - kfosmire - b > makeemacs fraction.c[16D[2Pcat[11C[14Dexit[K./change DoG[K[K[K[K[K[K[K[K[Kfractiop[Kn word 1 4
w
altair - kfosmire - b > ./fraction word 1 4 4[K 4[K1 3
w
altair - kfosmire - b > ./fraction word 1 3[K2
wo
altair - kfosmire - b > ./fraction word 1 2[K[K3 4
wor
altair - kfosmire - b > ./fraction word 3 4[K[K4 4
word
altair - kfosmire - b > ./fraction word 4 4[K[K4 1
wordwordwordword
altair - kfosmire - b > exit
exit

script done on Mon Feb 17 19:25:11 2014
