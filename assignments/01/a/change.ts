Script started on Mon Feb 17 19:16:52 2014
altair - kfosmire - a > cat change.c
//Keith Fosmire
//CSC 344 Assignment 1a
//Due 12 February 2014

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>


lower(char in[])
{
  int size = strlen(in);//getting size for loop
  int i;
  for( i=0;i<size;++i)
    {
      char t =in[i];
      char down = tolower(t);//changes and prints
      printf("%c",down);
    }
        printf("\n");
}
upper(char in[])
{
        
  int size = strlen(in);//getting size for loop
  int i;
  for( i=0;i<size;++i)
    {
      char t =in[i];
      char up = toupper(t);//changes and prints
      printf("%c",up);
    }
        printf("\n");
}
alternate(char in[])
{
        int size = strlen(in);//getting size for loop
        int i;
        for(i=0; i<size;++i)
        {
                char t = in[i];
                char up;
                if(isupper(t)==0)//tests for upper or lower
                {
                        up = toupper(t);//changes to upper and prints
                        printf("%c",up);
                }
                else
                {
                        up = tolower(t);//changes to lower then prints
                        printf("%c",up);
                }
        }
        printf("\n");
}
main(int argc, char *argv[])
{
        char first[12]; //char string for first element
        char second[12]; //char string for second element
        char third[12];// char string for third element
        char test; // used to tes for u|s|l
        //making a decision on what function to call
        if(argc==3)
        {
                
                strcpy(second,argv[1]);//copy strings
                strcpy(third,argv[2]);//copy strings
                test = second[1];//set test element
                switch(test)
                {
                        case 'u':
                                upper(third);//call to upper function
                                break;
                        case 'l':
                                lower(third);//call to lower function
                                break;
                        case 's':
                                alternate(third);// call to alternate fucntion
                                break;
                                
                }
                
        }
        else if(argc==2)//default to upper case
        {
                strcpy(first,argv[0]);
                strcpy(second,argv[1]);
                upper(argv[1]);
        }
        else//prints if does not meet prior conditions
                printf("USAGE: ./change [-u | -l | -s] string\n");

        
        return 0;
} 
altair - kfosmire - a > emacs cat[K[K[K[K[K[K[K[Kcat stack.c
cat: stack.c: No such file or directory
altair - kfosmire - a > cat stack.c[7Dchange.c[12Dexit[Kmv rotater rotater.cgi[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Kemacs change.c










[?1h=[H[2J[18;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundament[m
[A[H[>0c[19;1H("emacs" "change.c")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction [m
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
[1m//CSC 344 Assignment 1a                          [m
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
[7m[1mlower[m([1m[4mchar[m [1min[m[])[K
{[K
  [1m[4mint[m [1msize[m = strlen(in);[1m//getting size for loop  [m
[A
  [1m[4mint[m [1mi[m;[K
  [1mfor[m( i=0;i<size;++i)[K
[7m-=--(DOS)----F1  [m[7m[1mchange.c    [m[7m   Top L1     (C/l A[m
[A
For information about GNU Emacs and the GNU syst\
[A[H
[19;1H[K[A[A    {[K
[7m-=--(DOS)----F1  [m[7m[1mchange.c    [m[7m   Top L2     (C/l A[m
[H

[18;38H[7m3[m[4;1H[18;38H[7m4[m[5;1H/[18;10H[7m**[m[5;2H[12;1Hlower[5;2H[1m/*                                               [m
[1m#include <stdio.h>                               [m
[5;3H

[1m#include <stdlib.h>                              [m
[1m#include <ctype.h>                               [m
[1m#include <string.h>                              [m
[1m                                                 [m
[1m                                                 [m
[1mlower(char in[])                                 [m
[1m{                                                [m
[1m  int size = strlen(in);[m
[1m  int i;                                         [m
[1m  for( i=0;i<size;++i)                           [m
[1m    {                                            [m
[5;3H[C[1mt[m[1m [m[1mT[m[1mh[m[1mj[m[1mi[m[1m [m[1m [m[1m [m[1m [m[1mP[m[1mr[m[1mo[m[1mg[m[1mr[m[1ma[m[1mm[m[C[1mu[m[1ms[m[1me[m[1ms[m[C[1mc[m[1mo[m[1mm[m[1mm[m[1ma[m[1mn[m[1md[m[C[1mp[m[1mr[m[1mo[m[1mm[m[1mp[m[1mt[m[C[1mt[m[1mo[m[C[1mc[m[1mh[m[1ma[m[1mn[m[1mg[m[1me[m[C[1mt[m[1mh[m[1me[m[C[1mc[m[1ma[m[1ms[m[K[1;17r[7;1H[1L[1;19r[5;49H\
[1me                 [m
[1m#include <stdio.h>                               [m
[A[6;2H[C[1mf[m[1mr[m[1mo[m[1mm[m[C[1ml[m[1mo[m[1mw[m[1me[m[1mr[m[C[1mt[m[1mo[m[C[1mu[m[1mp[m[1mp[m[1me[m[1mr[m[C[1ma[m[1mn[m[1md[m[C[1mu[m[1mp[m[1mp[m[1me[m[1mr[m[C[1mt[m[1mo[m[C[1ml[m[1mo[m[1mw[m[1me[m[1mr[m[C[1mu[m[1ms[m[1mi[m[1mn[m[1mg[m[C[1mt[m[K[1;17r[8;1H[1L[1;19r[6;49H\
[1mh                 [m
[1m#include <stdio.h>                               [m
[A[7;2H[1me[m[C[1mp[m[1mr[m[1mo[m[1mp[m[1me[m[1mr[m[C[1mc[m[1mo[m[1mm[m[1mm[m[1ma[m[1mn[m[1md[m[1ms[m[1m.[m[1;17r[9;1H[1L[1;19r[8;1H[1m                  [m
[1m#include <stdio.h>                               [m
[A[18;38H[7m5[m[8;1H[1m-[m[1mu[m[C[1mf[m[1mo[m[1mr[m[C[1mu[m[1mp[m[1mp[m[1me[m[1mr[m[1m([m[1mn[m[1mo[m[C[1mc[m[1mo[m[1mm[m[1mm[m[1ma[m[1mn[m[1md[m[1ms[m[1m=[m[1m=[m[1mu[m[1mp[m[1mp[m[1me[m[1mr[m[C[1mf[m[1mo[m[1mr[m[C[1md[m[1me[m[1mf[m[1ma[m[1mu[m[1ml[m[1mt[m[1;17r[10;1H[1L[1;19r[9;1H[1m                  [m
[1m#include <stdio.h>                               [m
[A[18;38H[7m6[m[9;1H[1m-[m[1ml[m[C[1mf[m[1mo[m[1mr[m[C[1ml[m[1mo[m[1ms[m[1mw[m[1me[m[1m [m[1m [m[1m [m[1mw[m[1me[m[1mr[m[C[1ma[m[1mn[m[1m [m[1m [m[1m-[m[1ms[m[C[1mt[m[1mo[m[C[1ma[m[1ml[m[1mt[m[1me[m[1mr[m[1mn[m[1ma[m[1mr[m[1mt[m[1m [m[1m [m[1mt[m[1me[m[C[1me[m[1ma[m[1mc[m[1mh[m[C[1ml[m[1me[m[1mt[m[1mt[m[1me[m[1mr[m[C[1mi[m[1mn[m[C[1mt[m[1mh[m[1me[m[C[K[1;17r[11;1H[1L[1;19r[9;49H\
[1mc                 [m
[1m#include <stdio.h>                               [m
[A[A[C[1mh[m[1ma[m[1mr[m[1ma[m[1mc[m[1mt[m[1me[m[1mr[m[C[1ms[m[1mt[m[1mr[m[1mi[m[1mn[m[1mg[m[1m.[m[1m*[m[1m/[m[K
[1m#include[m <stdio.h>[m[K[A[C

[1m#include[m <stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[K
[K
[7m[1mlower[m([1m[4mchar[m [1min[m[])[K[10;20H[19;1H C-h) [16;1H[7m-=--(DOS)**--F1  [m[7m[1mchange.c    [m[7m   Top L6     (C/l A[m
Save file /home/kfosmire/public_html/csc344/assi\
gnments/01/a/change.c? (y, n, !, ., q, C-r, d or\
[19;7H C-h) y[17;1HSave file /home/kfosmire/public_html/csc344/assi
gnments/01/a/change.c? (y, n, !, ., q, C-r, d or[19;8H[K[17;4Hing file /home/kfosmire/public_html/csc344/as
signments/01/a/change.c...[K[10;20H[17;1HWrote /home/kfosmire/public_html/csc344/assignme
nts/01/a/change.c[K[10;20H[16;1H[K
[7m[1mlower[m([1m[4mchar[m [1min[m[])[K
[7m-=--(DOS)----F1  [m[7m[1mchange.c    [m[7m   Top L6     (C/l A[m
[10;20H[19;1H[K[?1l>altair - kfosmire - a > make
gcc -g -c  change.c
gcc -g -o change change.o 
altair - kfosmire - a > make[K[K[K[K./change -u dog
DOG
altair - kfosmire - a > ./change -u dog[K[K[K[Kl DOG
dog
altair - kfosmire - a > ./change -l DOG[K[Kog[KG DoG[Ks DoG DoG
dOg
altair - kfosmire - a > ./change -s DoG DoG[K DoG[KDoG[K
DOG
altair - kfosmire - a > exit
exit

script done on Mon Feb 17 19:20:33 2014
