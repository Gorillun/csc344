Script started on Mon Feb 17 19:27:06 2014
altair - kfosmire - c > cat [K[K[Kemacs rotater.c










[?1h=[H[2J[18;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundament[m
[A[H[>0c[19;1H("emacs" "rotater.c")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction [m
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
[1m#include[m<stdio.h>[m[K
[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m[K
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)[K
{[K
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K
                out = d-.5;[K
        }[K
        [1melse[m[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   Top L1     (C/l A[m
[A
For information about GNU Emacs and the GNU syst\
[A[H
[19;1H[K[A[A        {[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   Top L2     (C/l A[m
[H

[18;38H[7m3[m[4;1H[18;38H[7m4[m[5;1H[18;38H[7m5[m[6;1H[18;38H[7m6[m[7;1H[18;38H[7m7[m[8;1H[18;38H[7m8[m[9;1H[18;38H[7m9[m[10;1H[18;38H[7m10[m[11;1H[18;39H[7m1[m[12;1H[18;39H[7m2[m[13;1H[18;39H[7m3[m[14;1H[18;39H[7m4[m[15;1H[18;39H[7m5[m[16;1H[18;39H[7m6[m[A[H
{[K
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K
                out = d-.5;
        }[K
        [1melse[m[K
        {[K
                out = d+.5;[11;9H}[K
[K[13;9H[1mreturn[m out;
}[K
[1m[4mvoid[m [7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
{[K[17;9H[1m[4mint[m   [1mcount[m =c;[18;33H[7m16% L17[m[10;1H[18;39H[7m8[m[11;1H[18;39H[7m9[m[12;1H[18;38H[7m20[m[13;1H[18;39H[7m1[m[14;1H[18;39H[7m0[m[13;1H[18;38H[7m19[m[12;1H[18;39H[7m8[m[11;1H[18;39H[7m7[m[10;1H[18;39H[7m6[m[9;1H[18;39H[7m5[m[8;1H[18;39H[7m4[m[7;1H[18;39H[7m3[m[6;1H[18;39H[7m2[m[5;1H[18;39H[7m1[m[4;1H[18;39H[7m0[m[H

[18;38H[7m9 [m[H
[1m#include[m<stdio.h>[m
[1m#include[m<stdlib.h>[m
[1m#include[m <ctype.h>[m
[1m#include[m <string.h>[m
[1m#include[m <math.h>[m[K
[1m#define[m [1mWRITEONLY[m "w"[m
[1m#define[m [1mREADONLY[m "r"[m
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{[K[11;9H[1m[4mint[m [1mout[m;[12;9H[1mif[m(d<0)[13;9H{[K
                out = d-.5;
        }[K
        [1melse[m
{[K[18;33H[7mTop L8[m[9;1H[18;38H[7m7[m[8;1H[18;38H[7m6[m[7;1H[18;38H[7m5[m[6;1H[18;38H[7m4[m[5;1H[18;38H[7m3[m[4;1H[18;38H[7m2[m[H

[18;38H[7m1[m[H
[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[18;38H[7m2[m[3;18H[18;38H[7m3[m[4;18H[18;38H[7m4[m[5;18H[18;38H[7m5[m[6;18H[18;38H[7m6[m[7;18H[18;38H[7m7[m[8;18H[C[C[C
[K
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{[K[12;9H[1m[4mint[m [1mout[m;[13;9H[1mif[m(d<0)[14;9H{[K
        out = d-.5;[16;9H}[K
[1melse[m
[7m**--F1  [m[7m[1mrotater.c   [m[7m   Top L8[m[9;1H[18;38H[7m7[m[8;1H[18;38H[7m6[m[7;1H[18;38H[7m5[m[6;1H[18;38H[7m4[m[5;1H[18;38H[7m3[m[4;1H[18;38H[7m2[m[H

[18;38H[7m1[m[H
[1;17r[2;1H[1L[1;19r[2;1H[K[18;38H[7m2[m[H

[18;38H[7m1[m[H
[19;1HAuto-saving...[H
[19;15Hdone[H
[19;1H[K[H
/[1m//                                               [m
[2;3H[1mk[m[1me[m[1mi[m[1mt[m[1m [m[1m [m[1m [m[1m [m[1mK[m[1me[m[1mi[m[1mt[m[1mh[m[C[1mF[m[1mo[m[1ms[m[1mm[m[1mi[m[1mr[m[1me[m[1;17r[3;1H[1L[1;19r[3;1H[K[18;38H[7m2[m[H

/[1m//                                               [m
[3;3H[1mC[m[1mS[m[1mC[m[1m3[m[1m4[m[1m4[m[C[1ma[m[1ms[m[1ms[m[1mi[m[1mg[m[1mn[m[1mm[m[1me[m[1mn[m[1mt[m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1mA[m[1m [m[C[1mA[m[1ms[m[1ms[m[1mi[m[1mg[m[1mn[m[1mm[m[1me[m[1mr[m[1mn[m[1m [m[1m [m[1m [m[1me[m[1mn[m[1mt[m[C[1m1[m[C[1mc[m[1;17r[5;1H[1L[1;19r[4;1H[K
[1m#include[m<stdio.h>[m[K[18;38H[7m3[m[4;1H/[1m//                                               [m
[4;3H[1md[m[1mu[m[1me[m[C[1md[m[1ma[m[1mt[m[1me[m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1mD[m[1mu[m[1me[m[C[1m1[m[1m2[m[C[1mF[m[1me[m[1mb[m[1mr[m[1mu[m[1ma[m[1mr[m[1my[m[C[1m2[m[1m0[m[1m1[m[1m4[m[1;17r[6;1H[1L[1;19r[5;1H[K
[1m#include[m<stdio.h>[m[K[18;38H[7m4[m[5;1H/[14;5HroundIt[5;2H[1m/*                                               [m
[1m#include<stdio.h>                                [m
[5;3H

[1m#include<stdlib.h>                               [m
[1m#include <ctype.h>                               [m
[1m#include <string.h>                              [m
[1m#include <math.h>                                [m
[1m#define WRITEONLY "w"                            [m
[1m#define READONLY "r"                             [m
[1m                                                 [m
[1mint roundIt(float d)                             [m
[1m{                                                [m
[1m        int out;                                 [m
[1m        if(d<0)                                  [m
[5;3H[C[1mP[m[1mr[m[1mo[m[1mg[m[1mr[m[1ma[m[1mm[m[C[1mi[m[1ms[m[C[1mt[m[1mw[m[1mo[m[1m [m[1m [m[1m [m[1m [m[1m [m[1mu[m[1ms[m[1me[m[1ms[m[C[1md[m[1ma[m[1mt[m[1ma[m[C[1m [m[1m [m[1m [m[1m [m[1ma[m[C[1ma[m[1mn[m[1md[m[C[1m [m[1m [m[1m [m[1m [m[1mc[m[1ma[m[1mr[m[1mt[m[1me[m[1ms[m[1mi[m[1mo[m[1mn[m[C[1m [m[1m [m[1ma[m[1mn[m[C[1mp[m[1mop[m[1mi[m[1m [m[1m [m[1mi[m[1mn[m[1mt[m[1ms[m[C[C[1m cartesian points[m[5;17H[1mi cartesian points[m[5;18H[1mn cartesian points[m[5;19H[1mp cartesian points[m[5;20H[1mu cartesian points[m[5;21H[1mt cartesian points[m[5;22H[1me cartesian points[m[5;23H[1m cartesian points [m[5;22H[C[C[C[C[C[C[C[C[C[C[C[C[C[C[19;1HAuto-saving...[5;36H[19;15Hdone[5;36H[19;1H[K[5;37H[C[C[C[1mt[m[1mo[m[C[1m [m[1m [m[1mt[m[1mo[m[C[1mm[m[1ma[m[1mk[m[1me[m[C[1ma[m[K[1;17r[7;1H[1L[1;19r[5;49H\
[1m                 [m
[1m#include<stdio.h>                                [m
[A[6;2H[1mr[m[1mo[m[1mt[m[1ma[m[1mi[m[1mo[m[1mn[m[C[1mm[m[1ma[m[1mt[m[1mr[m[1mi[m[1mx[m[C[1mu[m[1m [m[C[1mb[m[1my[m[C[1mu[m[1ms[m[1mi[m[1mn[m[1mg[m[C[1mt[m[1mh[m[1me[m[C[1mC[m[1mo[m[1ms[m[C[1ma[m[1mn[m[1md[m[C[1mS[m[1mi[m[1mn[m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1mi[m[1mn[m[1me[m[C[1ma[m[1mn[m[1md[m[C[1ms[m[1mi[m[1mn[m[1me[m[C[1m [m[1m [m[1m [m[1m [m[1mS[m[1mi[m[1mn[m[1me[m[C[1mo[m[1mf[m[C[K[1;17r[8;1H[1L[1;19r[6;49H\
[1mt                [m
[1m#include<stdio.h>                                [m
[A[7;2H[1mh[m[1me[m[C[A[C[1mtion matrix by using the Cosine and Sine of[m
[1m the[m[6;7H
[1mgi[m[1mv[m[1me[m[1mn[m[C[1mx[m[C[1ma[m[1mn[m[1md[m[C[1my[m[C[1mc[m[1mo[m[1mo[m[1mr[m[1md[m[1mi[m[1mn[m[1mt[m[1m [m[1ma[m[1mt[m[1me[m[1ms[m[1m.[m[C[1mt[m[1m [m[1mT[m[1mh[m[1me[m[C[1mo[m[1mu[m[1mt[m[1mp[m[1mu[m[1mt[m[C[1mi[m[1ms[m[C[1mt[m[1mh[m[K[1;17r[9;1H[1L[1;19r[7;49H\
[1me                [m
[1m#include<stdio.h>                                [m
[A[8;2H[C[1ma[m[1md[m[1mj[m[1mu[m[1ms[m[1mt[m[1me[m[1md[m[C[1mp[m[1mo[m[1mi[m[1mn[m[1mt[m[1ms[m[1m.[m[C[1mT[m[1mh[m[1me[m[C[1mp[m[1mr[m[1mo[m[1mg[m[1mr[m[1ma[m[1mm[m[C[1ma[m[1ml[m[1ms[m[1mo[m[C[1mr[m[1mu[m[1mn[m[1ms[m[C[1mas[m[C[1ma[m[C[1mC[m[1mG[m[K[1;17r[10;1H[1L[1;19r[8;49H\
[1mI                [m
[1m#include<stdio.h>                                [m
[A[9;2H[C[1mc[m[1mo[m[1m [m[1m [m[1;17r[10;1H[1M[1;19r[8;49H[K
[1m#include<stdio.h>[m[17;1H[1mint roundIt(float d)                             [m
[A[8;49H[1m  [m
[8;48H[1m [m[1mC[m[1mo[m[K[1;17r[10;1H[1L[1;19r[8;49H\
[1mm                [m
[1m#include<stdio.h>                                [m
[A[9;2H[1mm[m[1mo[m[1mn[m[C[1mG[m[1ma[m[1mt[m[1mw[m[1ma[m[1m [m[1m [m[1me[m[1mw[m[1ma[m[1my[m[C[1mI[m[1mn[m[1mt[m[1me[m[1mr[m[1mf[m[1ma[m[1mc[m[1me[m[C[1mt[m[1mo[m[C[1mi[m[1mn[m[1mt[m[1me[m[1mr[m[1ma[m[1mc[m[1mt[m[C[1mw[m[1mi[m[1mt[m[1mh[m[C[1ma[m[C[1mj[m[1ma[m[1mv[m[1ma[m[1ms[m[1mc[m[K[1;17r[11;1H[1L[1;19r[9;49H\
[1mr                [m
[1m#include<stdio.h>                                [m
[A[A[C[1mi[m[1mp[m[1mt[m[C[1mr[m[1mu[m[1mn[m[C[1mw[m[1me[m[1mb[m[C[1mp[m[1ma[m[1mg[m[1me[m[C[C[1mt[m[1mo[m[C[19;1HAuto-saving...[10;22H[19;15Hdone[10;22H[19;1H[K[10;22H[1mde[m[1mm[m[1mo[m[1mn[m[1ms[m[1mt[m[1ma[m[1m [m[1mr[m[1mt[m[1ma[m[1m [m[1m [m[1ma[m[1mt[m[1me[m[C[1ma[m[C[1mv[m[1mi[m[1ms[m[1mu[m[1ma[m[1ml[m[C[1ma[m[1ml[m[1mt[m[1me[m[1mr[m[1ma[m[K[1;17r[12;1H[1L[1;19r[10;49H\
[1mt                [m
[1m#include<stdio.h>                                [m
[A[A[C[1mi[m[1mo[m[1mn[m[C[1mi[m[1mn[m[C[1mp[m[1mo[m[1mi[m[1mn[m[1mt[m[1ms[m[1m*[m[1m/[m[K
[1m#include[m<stdio.h>[m[K[A

[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[1m#define[m [1mWRITEONLY[m "w"[m[K[11;17H[18;38H[7m5[m[12;17H[18;38H[7m6[m[13;17H[18;38H[7m7[m[14;17H[18;38H[7m8[m[15;17H[18;38H[7m9[m[16;17H[18;38H[7m10[m[17;17H[H
[1mmmon Gateway Interface to interact with a javasc[m\
[1mript run web page to demonstrate a visual altera[m\
[1mtion in points*/[m[K
[1m#include[m<stdio.h>[m[K
[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m
[K
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{[K
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K[18;33H[7m19% L11[m[11;17H[18;39H[7m2[m[12;1H[18;39H[7m3[m[13;17H[18;39H[7m4[m[14;9H[18;39H[7m3[m[13;17H[18;39H[7m2[m[12;1H/[13;5HroundIt[12;2H[1m//                                               [m
[13;5H[7m[1mroundIt[m[12;3H[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[18;34H[7m8[m[12;9H[1m**[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[1m [m[18;34H[7m9[m[12;8H[1m [m[1m [m[1m*[m[1m*[m[1m*[m[18;34H[7m8[m[12;9H[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[1m*[m[18;39H[7m3[m[13;21H[18;39H[7m4[m[14;9H[18;39H[7m5[m[15;17H[18;39H[7m6[m[16;16H[18;39H[7m7[m[17;10H[H
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m[K
[1m//******************************                 [m
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{[K
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K
                out = d-.5;
        }[K
        [1melse[m[K
        {[K
                out = d+.5;[15;9H}[K
[K[17;9H[1mreturn[m out;[18;33H[7m33% L18[m[10;28H[18;39H[7m9[m[11;10H[18;38H[7m20[m[12;13H[18;39H[7m1[m[13;10H[18;39H[7m0[m[12;13H[18;38H[7m19[m[11;10H[18;39H[7m8[m[10;28H[18;39H[7m7[m[9;10H[18;39H[7m6[m[8;16H[18;39H[7m5[m[7;17H[18;39H[7m4[m[6;9Hroun[K[K[K[C[K[6;9H/[7;13Hout[6;10H[1m//                                       [m
[7;13H[1mout[m[6;11H[1mr[m[1mo[m[1mu[m[18;34H[7m2[m[6;14H[1mn[m[1md[m[1mi[m[1mn[m[1mg[m[C[1mp[m[1mo[m[1mi[m[1mn[m[1mt[m[1ms[m[C[1mt[m[1mo[m[C[1mt[m[1mh[m[1me[m[C[1mn[m[1me[m[1ma[m[1mr[m[1me[m[1ms[m[1mt[m[C[1mw[m[1mh[m[1mo[m[1ml[m[1me[m[C[1m#[m[K[18;39H[7m5[m[7;17H[18;39H[7m6[m[8;16H[18;39H[7m7[m[9;10H[18;39H[7m8[m[10;28H[18;39H[7m9[m[11;10H[18;38H[7m20[m[12;13H[18;39H[7m1[m[13;10H[18;39H[7m2[m[14;28H[18;39H[7m3[m[15;10H[18;39H[7m4[m[16;9H[18;39H[7m5[m[17;20H[H
                out = d-.5;
        }[K
        [1melse[m[K
        {[K
                out = d+.5;[K[7;9H}[K
[K[9;9H[1mreturn[m out;
}[K
[1m[4mvoid[m [7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
{[K[13;9H[1m[4mint[m   [1mcount[m =c;[14;9H[1m[4mfloat[m [1mtemp[m[count];[K[15;9H[1m[4mint[m [1mi[m,[1mj[m;[17;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;[18;33H[7m43% L26[m[10;2H[18;39H[7m7[m[11;29H[18;39H[7m8[m[12;9H[18;39H[7m9[m[13;24H[18;38H[7m30[m[14;27H[18;39H[7m1[m[15;17H[18;39H[7m2[m[16;9H[18;39H[7m3[m[A[H
}[K
[1m[4mvoid[m [7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
{[K[5;9H[1m[4mint[m   [1mcount[m =c;[6;9H[1m[4mfloat[m [1mtemp[m[count];[K[7;9H[1m[4mint[m [1mi[m,[1mj[m;[9;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;
[K
[K
        [1mfor[m(i=1;i<c;++i)[13;9H{[K
        [1mif[m(i%2!=0)[15;9H                temp[i-1]=(in[i]*cos(the\
ta))-(in[i+1]*sin(theta));[17;9H        [1melse[m[K[18;34H[7m7% L34[m[10;9H[19;1HAuto-saving...[10;9H[19;15Hdone[10;9H[19;1H[K[18;39H[7m5[m[11;9H[18;39H[7m6[m[12;25H[18;39H[7m7[m[13;10H[18;39H[7m8[m[14;27H[18;39H[7m9[m[16;1H[18;38H[7m40[m[17;21H[18;38H[7m39[m[16;27H[A[18;39H[7m8[m[14;27H[18;39H[7m7[m[13;10H[18;39H[7m6[m[12;25H[18;39H[7m5[m[11;9H[18;39H[7m4[m[10;9H[18;39H[7m3[m[9;40H[1m//        [m
[9;42H[1mc[m[1mo[m[1mn[m[18;34H[7m6[m[9;45H[1me[m[1mr[m[1m [m[1m [m[1mv[m[1me[m[1mr[m[1mt[m[K[1;17r[11;1H[1L[1;19r[9;49H\
[1ms                                                [m
[K[A[C[C[1mt[m[1mp[m[1mo[m[1m [m[1m [m[1m [m[1;17r[11;1H[1M[1;19r[9;49H[K
[K[17;1H                [1melse[m[K[9;49H[1;17r[11;1H[1L[1;19r[9;49H\
[1ms                                                [m
[K[A[C[C[1mt[m[1mo[m[C[1m [m[1m [m[1;17r[11;1H[1M[1;19r[9;49H[K
[K[17;1H                [1melse[m[K[9;49H[1m  [m
[9;48H[1m [m[1m [m[1m [m[1m [m[18;34H[7m7[m[9;44H[1m [m[1m [m[1mco[m[1mn[m[18;34H[7m6[m[9;45H[1mv[m[1me[m[1mr[m[C[K[1m [m
[9;48H[1mt[m[K[1;17r[11;1H[1L[1;19r[9;49H\
[1m                                                 [m
[K[A[C[1mt[m[1mo[m[C[1mr[m[1ma[m[1md[m[1mi[m[1ma[m[1mn[m[1ms[m[C[1mf[m[1mr[m[1mo[m[1mm[m[C[1md[m[1me[m[1mg[m[1mr[m[1me[m[1me[m[1ms[m[18;39H[7m4[m[11;9H[18;39H[7m5[m[12;9H[18;39H[7m6[m[13;1H[13;9H[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[18;39H[7m7[m[14;1H[18;39H[7m6[m[13;1H[18;39H[7m5[m[12;1H[12;9H[18;39H[7m6[m[13;1H[13;9H[18;39H[7m5[m[12;9H/[1m//                                       [m
[12;11H[1ms[m[1mw[m[1mi[m[18;34H[7m5[m[12;14H[1mt[m[1mc[m[1mh[m[1me[m[1ms[m[C[1mb[m[1me[m[1mt[m[1mw[m[1mw[m[1m [m[1me[m[1me[m[1mn[m[C[1mx[m[C[1ma[m[1mn[m[1md[m[C[1my[m[18;39H[7m6[m[13;25H[18;39H[7m7[m[14;10H[18;39H[7m8[m[15;27H[18;39H[7m9[m[16;35H[17;27H[H
        [1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;[1m//convert[m\
[1m to radians from degrees                         [m
[K[5;9H[1m//switches between x and y               [m
[6;9H[1mfor[m(i=1;i<c;++i)[K[7;9H{[K[8;17H[1mif[m(i%2!=0)[9;9H                temp[i-1]=(in[i]*cos(the
ta))-(in[i+1]*sin(theta));[K[11;17H[1melse[m[12;9H                temp[i-1]=(in[i-1]*sin(t\
heta))-(in[i]*cos(theta));
[K[15;9H}[K
printf("Content-type: plain/text\n\n"[m);[K
        [1mfor[m(j=0;j<c-2;++j)[18;33H[7m50% L40[m[11;21H[18;39H[7m1[m[12;35H[13;27H[18;39H[7m2[m[14;17H[18;39H[7m3[m[15;10H[18;39H[7m4[m[16;35H[18;39H[7m5[m[17;27H[2;9H                temp[i-1]=(in[i]*cos(the
ta))-(in[i+1]*sin(theta));[K[4;17H[1melse[m[5;9H                temp[i-1]=(in[i-1]*sin(t\
heta))-(in[i]*cos(theta));
[K[8;9H}[K
printf("Content-type: plain/text\n\n"[m);[K
        [1mfor[m(j=0;j<c-2;++j)[11;9H{[K[12;17Hprintf("%i, "[m,roundIt(temp[j]));[K
[K[14;9H}
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K[18;34H[7m9% L46[m[11;10H[18;39H[7m7[m[12;35H[18;39H[7m8[m[13;17H[18;39H[7m9[m[14;10H[18;38H[7m50[m[15;35H[18;39H[7m1[m[16;9H[18;39H[7m2[m[17;2H[2;9H[1mfor[m(j=0;j<c-2;++j)[K
        {[K[4;17Hprintf("%i, "[m,roundIt(temp[j]));
[K
        }[K
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K
[1m//****************************                   [m
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
{[K[14;9H[1m[4mint[m [1mone[m[100];[15;9H[1m[4mchar[m *[1mdata[m[100];[K[16;9H[1m[4mint[m [1mi[m =0;
        [1m[4mint[m [1mj[m=0;[18;33H[7m69% L53[m[10;31H[18;39H[7m4[m[11;33H[18;39H[7m5[m[12;2H[18;39H[7m6[m[13;9H[18;39H[7m7[m[14;22H[18;39H[7m8[m[15;25H



Auto-saving...[15;25H[19;15Hdone[15;25H



[K[18;39H[7m9[m[16;18H[18;38H[7m60[m[17;17H[H
[1m//****************************                   [m
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
{[K[6;9H[1m[4mint[m [1mone[m[100];[7;9H[1m[4mchar[m *[1mdata[m[100];[K[8;9H[1m[4mint[m [1mi[m =0;
        [1m[4mint[m [1mj[m=0;
        [1m[4mint[m [1mcount[m;[K
        [1mwhile[m(j<100)[K
[8@[13;17Hone[j]=0;[14;9H        ++j;[K[15;9H}[K
j=0;[K
[1m[4mFILE[m* [1min[m;[18;33H[7m76% L61[m[10;19H[18;39H[7m2[m[11;21H[18;39H[7m3[m[12;10H[18;39H[7m4[m[13;26H[18;39H[7m5[m[14;21H[18;39H[7m6[m[15;10H[18;39H[7m7[m[16;13H[18;39H[7m8[m[17;18H[H
        [1m[4mint[m [1mcount[m;[K
        [1mwhile[m(j<100)[K
[8@[5;17Hone[j]=0;[6;9H        ++j;[K[7;9H}[K
j=0;[K
[1m[4mFILE[m* [1min[m;[10;9H[1m[4mFILE[m* [1mfp[m;[K[11;9Hi=0;[K
in = stdin;[13;9Hfprintf(in,"%s"[m,stdin);[14;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[16;9H        {
[K[18;33H[7m84% L69[m[10;18H[18;38H[7m70[m[11;13H[18;39H[7m1[m[12;20H[18;39H[7m2[m[13;32H[18;39H[7m3[m[14;35H[15;5H[18;39H[7m4[m[16;18H[18;39H[7m5[m[17;17H[2;9H[1m[4mFILE[m* [1mfp[m;[K[3;9Hi=0;[K
in = stdin;[5;9Hfprintf(in,"%s"[m,stdin);[6;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[8;9H        {
[K[10;9H        printf("%d"[m,one[j] );[11;9H                ++j;[12;9H                ++count;[13;9H        }[K
[K
                rotate(one,count);[16;17Hcount=0;[18;34H[7m8% L76[m[10;35H[18;39H[7m7[m[11;29H[18;39H[7m8[m[12;33H[18;39H[7m9[m[13;18H[18;38H[7m80[m[14;17H[18;39H[7m1[m[15;35H[18;39H[7m2[m[16;25H[18;39H[7m3[m[A[2;9H        printf("%d"[m,one[j] );[3;9H                ++j;[4;9H                ++count;[5;9H        }[K
[K
                rotate(one,count);[8;17Hcount=0;

}[K
[K
[K
[K

[K
[K[18;33H[7mBot L84[m[10;2H[18;39H[7m5[m[11;1H[18;39H[7m4[m[10;2H[18;39H[7m3[m[9;1H[18;39H[7m2[m[8;25H[18;39H[7m1[m[7;35H[18;39H[7m0[m[6;17H[18;38H[7m79[m[5;18H[18;39H[7m8[m[4;33H[18;39H[7m7[m[3;29H[18;39H[7m6[m[2;35H[2;9H[1m[4mFILE[m* [1min[m;[K[3;9H[1m[4mFILE[m* [1mfp[m;[K[4;9Hi=0;[K
in = stdin;[6;9Hfprintf(in,"%s"[m,stdin);[7;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[9;17H{
[K[11;17Hprintf("%d"[m,one[j] );[12;25H++j;
++count;[14;17H}

rotate(one,count);[17;17Hcount=0;[18;33H[7m88% L75[m[10;17H[18;39H[7m4[m[9;18H[18;39H[7m3[m[8;5H[7;35H[18;39H[7m2[m[6;32H[18;39H[7m1[m[5;20H[18;39H[7m0[m[4;13H[18;38H[7m69[m[3;18H[18;39H[7m8[m[2;18H[2;9H[1m[4mint[m [1mi[m =0[3;9H[1m[4mint[m [1mj[m=0;[K[4;9H[1m[4mint[m [1mcount[m;[5;9H[1mwhile[m(j<100)[6;9H{[K[7;17Hone[j]=0;[K
                ++j;[9;9H}[K
j=0;
[1m[4mFILE[m* [1min[m;[K[12;9H[1m[4mFILE[m* [1mfp[m;[K[13;9Hi=0;[K
in = stdin;[15;9Hfprintf(in,"%s"[m,stdin);[16;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[18;34H[7m3% L67[m[10;13H[18;39H[7m6[m[9;10H[18;39H[7m5[m[8;21H[18;39H[7m6[m[9;10H[18;39H[7m7[m[10;13H[18;39H[7m8[m[11;18H[18;39H[7m9[m[12;18H[18;38H[7m70[m[13;13H[18;39H[7m1[m[14;20H[18;39H[7m2[m[15;32H[18;39H[7m3[m[16;35H[17;5H[2;9Hj=0;[K
[1m[4mFILE[m* [1min[m;[4;9H[1m[4mFILE[m* [1mfp[m;[K[5;9Hi=0;[K
in = stdin;[7;9Hfprintf(in,"%s"[m,stdin);[8;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[10;9H        {
[K[12;9H        printf("%d"[m,one[j] );[13;9H                ++j;[14;9H                ++count;[15;9H        }[K
[K
                rotate(one,count);
[7m7% L74[m[10;18H[18;39H[7m5[m[11;17H[18;39H[7m6[m[12;35H[18;39H[7m7[m[13;29H[18;39H[7m8[m[14;33H[18;39H[7m9[m[15;18H[18;38H[7m80[m[16;17H[18;39H[7m1[m[17;35H[2;9H        {
[K[4;9H        printf("%d"[m,one[j] );[5;9H                ++j;[6;9H                ++count;[7;9H        }[K
[K
                rotate(one,count);[10;17Hcount=0;

}[K
[K
[K
[K

[K[18;33H[7mBot L82[m[10;25H[18;39H[7m3[m[11;1H[18;39H[7m4[m[12;2H[18;39H[7m5[m[13;1H





Auto-saving...[13;1H[19;15Hdone[13;1H





[K[13;1H





r C-h) [16;1H[7m-=--(DOS)**--F1  [m[7m[1mrotater.c   [m[7m   Bot L85    (C/l A[m
Save file /home/kfosmire/public_html/csc344/assi\
gnments/01/c/rotater.c? (y, n, !, ., q, C-r, d o\
[19;8Hr C-h) y[17;1HSave file /home/kfosmire/public_html/csc344/assi
gnments/01/c/rotater.c? (y, n, !, ., q, C-r, d o[19;9H[K[17;4Hing file /home/kfosmire/public_html/csc344/as
signments/01/c/rotater.c...[K[13;1H



Wrote /home/kfosmire/public_html/csc344/assignme
nts/01/c/rotater.c[K[13;1H


[K
[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   Bot L85    (C/l A[m
[13;1H





[K[?1l>altair - kfosmire - c > Ma[K[Kemacs Makefile










[?1h=[H[2J[18;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundament[m
[A[H[>0c[19;1H("emacs" "Makefile")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction [m
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
[19;1Hem, type C-h C-a.[K[H[7mFile Edit Options Buffers Tools Makefile Help    [m
[A
[1m# Makefile                                       [m
[A
[1mCC[m = gcc[K
[1mCFLAGS[m = -g[K
[1mLFLAGS[m = -R /user/sfw/lib -lm[K
[1mOBJS[m = rotate.o[K
[1mEXEC[m = rotate.cgi[K
[1mLIBS[m =[K
[1mINCS[m =[K
[7m[1m$([m[7m[1mEXEC[m[7m[1m)[m : $([1mOBJS[m)[K
        $([1mCC[m) $([1mCFLAGS[m) -o $([1mEXEC[m) $([1mOBJS[m) $([1mLIB[m\
[A
[1mS[m) $([1mLFLAGS[m)[K
[7m[1m.c.o[m:[K
        $([1mCC[m) $([1mCFLAGS[m) -c $([1mINCS[m) [7m[1m$[m[7m[1m[4m*[m.c[K
[K
[7m[1mclean[m :[K
[7m-=--:----F1  [m[7m[1mMakefile    [m[7m   Top L1     (GNUmakefi[m
[A
For information about GNU Emacs and the GNU syst\
[A[H
[19;1H[K[A[A        rm -f $([1mOBJS[m) $([1mEXEC[m)[K
[7m-=--:----F1  [m[7m[1mMakefile    [m[7m   All L2     (GNUmakefi[m
[H

[18;34H[7m3[m[4;1H[18;34H[7m4[m[5;1H[18;34H[7m5[m[6;1H[18;34H[7m4[m[5;1H[C[C[C[C[C[18;34H[7m5[m[6;6H[C[C[C[C[C[C[C[Cr.o[18;6H[7m**[m[6;15H[18;34H[7m6[m[7;15Hr.cgi[19;1H C-h) [16;1H[7m-=--:**--F1  [m[7m[1mMakefile    [m[7m   Top L6     (GNUmakefi[m
Save file /home/kfosmire/public_html/csc344/assi\
gnments/01/c/Makefile? (y, n, !, ., q, C-r, d or\
[19;7H C-h) y[17;1HSave file /home/kfosmire/public_html/csc344/assi
gnments/01/c/Makefile? (y, n, !, ., q, C-r, d or[19;8H[K[17;4Hing file /home/kfosmire/public_html/csc344/as
signments/01/c/Makefile...[K[7;15H[17;1HWrote /home/kfosmire/public_html/csc344/assignme
nts/01/c/Makefile[K[7;15H[16;1H[7m[1mclean[m :[K
        rm -f $([1mOBJS[m) $([1mEXEC[m)[K
[7m-=--:----F1  [m[7m[1mMakefile    [m[7m   All L6     (GNUmakefi[m
[7;15H[19;1H[K[?1l>altair - kfosmire - c > make
gcc -g -c  rotater.c
gcc -g -o rotater.cgi rotater.o  -R /user/sfw/lib -lm
altair - kfosmire - c > makeemacs Makefile[8Drotater.c[14Dxit[K./fraction word 4 14[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K./rotater < data.txt
./rotater: Command not found.
altair - kfosmire - c > em[K[K./rotater < data.txt[@. [@c [@g [@i 
9001000-50Content-type: plain/text

-100, 0, 50, 0
altair - kfosmire - c > emacs rotater.c










[?1h=[H[2J[18;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundament[m
[A[H[>0c[19;1H("emacs" "rotater.c")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction [m
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
[1m//CSC344 Assignment 1c                           [m
[A
[1m//Due 12 February 2014                           [m
[A
[1m/* Program uses input cartesian points to make a[m\
[A
[1m rotation matrix by using the Cosine and Sine of[m\
[A
[1m the given x and y coordinates. The output is th[m\
[A
[1me adjusted points. The program also runs as a Co[m\
[A
[1mmmon Gateway Interface to interact with a javasc[m\
[A
[1mript run web page to demonstrate a visual altera[m\
[A
[1mtion in points*/[m[K
[1m#include[m<stdio.h>[m[K
[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   Top L1     (C/l A[m
[A
For information about GNU Emacs and the GNU syst\
[A[H
[19;1H[K[A[A[1m#define[m [1mWRITEONLY[m "w"[m[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   Top L2     (C/l A[m
[H

[18;38H[7m3[m[4;1H[18;38H[7m4[m[5;1H





[18;38H[7m5[m[12;1H[18;38H[7m6[m[13;1H[18;38H[7m7[m[14;1H[18;38H[7m8[m[15;1H[18;38H[7m9[m[16;1H[18;38H[7m10[m[A[H
[1mmmon Gateway Interface to interact with a javasc[m\
[1mript run web page to demonstrate a visual altera[m\
[1mtion in points*/[m[K
[1m#include[m<stdio.h>[m[K
[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m
[1m//******************************                 [m
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{       [1m//rounding points to the nearest whole #[m
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K[18;33H[7m17% L11[m[11;1H[18;39H[7m2[m[12;1H[18;39H[7m3[m[13;1H[18;39H[7m4[m[14;1H[18;39H[7m5[m[15;1H[18;39H[7m6[m[16;1H[18;39H[7m7[m[A[H
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m[K
[1m//******************************                 [m
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{       [1m//rounding points to the nearest whole #[m
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K
                out = d-.5;
        }[K
        [1melse[m[K
        {[K
                out = d+.5;[K[15;9H}[K
[K[17;9H[1mreturn[m out;[18;33H[7m31% L18[m[10;1H[18;39H[7m9[m[11;1H[18;38H[7m20[m[12;1H[18;39H[7m1[m[13;1H[18;39H[7m2[m[14;1H[18;39H[7m3[m[15;1H[18;39H[7m4[m[16;1H[18;39H[7m5[m[A[H
                out = d-.5;
        }[K
        [1melse[m[K
        {[K
                out = d+.5;[K[7;9H}[K
[K[9;9H[1mreturn[m out;
}[K
[1m[4mvoid[m [7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
{[K[13;9H[1m[4mint[m   [1mcount[m =c;[14;9H[1m[4mfloat[m [1mtemp[m[count];[K[15;9H[1m[4mint[m [1mi[m,[1mj[m;[17;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;[1m//convert[m\
[18;33H[7m41% L26[m[10;1H[18;39H[7m7[m[11;1H[18;39H[7m8[m[12;1H[18;39H[7m9[m[13;1H[18;38H[7m30[m[14;1H[18;39H[7m1[m[15;1H[18;39H[7m2[m[16;1H[H
}[K
[1m[4mvoid[m [7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
{[K[5;9H[1m[4mint[m   [1mcount[m =c;[6;9H[1m[4mfloat[m [1mtemp[m[count];[K[7;9H[1m[4mint[m [1mi[m,[1mj[m;[9;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;[1m//convert[m\
[1m to radians from degrees                         [m
[K
        [1m//switches between x and y               [m
[13;9H[1mfor[m(i=1;i<c;++i)[14;9H{[K
        [1mif[m(i%2!=0)
temp[i-1]=(in[i]*cos(the\
ta))-(in[i+1]*sin(theta));[K[18;34H[7m5% L33[m[10;1H[18;39H[7m4[m[11;1H[18;39H[7m5[m[12;1H[18;39H[7m6[m[13;1H[18;39H[7m7[m[14;1H[18;39H[7m8[m[15;1H[18;39H[7m9[m[16;1H
[H
        [1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;[1m//convert[m\
[1m to radians from degrees                         [m
[K[5;9H[1m//switches between x and y               [m
[6;9H[1mfor[m(i=1;i<c;++i)[K[7;9H{[K[8;17H[1mif[m(i%2!=0)[9;9H                temp[i-1]=(in[i]*cos(the
ta))-(in[i+1]*sin(theta));[K[11;17H[1melse[m[12;9H                temp[i-1]=(in[i-1]*sin(t\
heta))-(in[i]*cos(theta));
[K[15;9H}[K
printf("Content-type: plain/text\n\n"[m);[K
        [1mfor[m(j=0;j<c-2;++j)[18;33H[7m50% L40[m[11;1H[18;39H[7m1[m[12;1H
[18;39H[7m2[m[14;1H[18;39H[7m3[m[15;1H[18;39H[7m4[m[16;1H[18;39H[7m5[m[A[2;9H                temp[i-1]=(in[i]*cos(the
ta))-(in[i+1]*sin(theta));[K[4;17H[1melse[m[5;9H                temp[i-1]=(in[i-1]*sin(t\
heta))-(in[i]*cos(theta));
[K[8;9H}[K
printf("Content-type: plain/text\n\n"[m);[K
        [1mfor[m(j=0;j<c-2;++j)[11;9H{[K[12;17Hprintf("%i, "[m,roundIt(temp[j]));[K
[K[14;9H}
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K[18;34H[7m9% L46[m[11;1H[18;39H[7m7[m[12;1H[18;39H[7m8[m[13;1H[18;39H[7m9[m[14;1H[18;38H[7m50[m[15;1H[18;39H[7m1[m[16;1H[18;39H[7m2[m[A[2;9H[1mfor[m(j=0;j<c-2;++j)[K
        {[K[4;17Hprintf("%i, "[m,roundIt(temp[j]));
[K
        }[K
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K
[1m//****************************                   [m
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
{[K[14;9H[1m[4mint[m [1mone[m[100];[15;9H[1m[4mchar[m *[1mdata[m[100];[K[16;9H[1m[4mint[m [1mi[m =0;
        [1m[4mint[m [1mj[m=0;[18;33H[7m69% L53[m[10;1H[18;39H[7m4[m[11;1H[18;39H[7m5[m[12;1H[18;39H[7m6[m[13;1H[18;39H[7m7[m[14;1H[18;39H[7m8[m[15;1H[18;39H[7m9[m[16;1H[18;38H[7m60[m[A[H
[1m//****************************                   [m
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
{[K[6;9H[1m[4mint[m [1mone[m[100];[7;9H[1m[4mchar[m *[1mdata[m[100];[K[8;9H[1m[4mint[m [1mi[m =0;
        [1m[4mint[m [1mj[m=0;
        [1m[4mint[m [1mcount[m;[K
        [1mwhile[m(j<100)[K
[8@[13;17Hone[j]=0;[14;9H        ++j;[K[15;9H}[K
j=0;[K
[1m[4mFILE[m* [1min[m;[18;33H[7m76% L61[m[10;1H[18;39H[7m2[m[11;1H[18;39H[7m3[m[12;1H[18;39H[7m4[m[13;1H[18;39H[7m5[m[14;1H[18;39H[7m6[m[15;1H[18;39H[7m7[m[16;1H[18;39H[7m8[m[A[H
        [1m[4mint[m [1mcount[m;[K
        [1mwhile[m(j<100)[K
[8@[5;17Hone[j]=0;[6;9H        ++j;[K[7;9H}[K
j=0;[K
[1m[4mFILE[m* [1min[m;[10;9H[1m[4mFILE[m* [1mfp[m;[K[11;9Hi=0;[K
in = stdin;[13;9Hfprintf(in,"%s"[m,stdin);[14;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[16;9H        {
[K[18;33H[7m84% L69[m[10;1H[18;38H[7m70[m[11;1H[18;39H[7m1[m[12;1H[18;39H[7m2[m[13;1H[18;39H[7m3[m[14;1H
[18;39H[7m4[m[16;1H[18;39H[7m5[m[A[2;9H[1m[4mFILE[m* [1min[m;[K[3;9H[1m[4mFILE[m* [1mfp[m;[K[4;9Hi=0;
in = stdin;[K[6;9Hfprintf(in,"%s"[m,stdin);[7;9H        [1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[9;9H        {
[K[11;9H        printf("%d"[m,one[j] );[12;9H                ++j;[13;9H                ++count;[14;17H}[K
[K[16;17Hrotate(one,count);[17;17Hcount=0;[18;34H[7m8% L76[m[11;1H[18;39H[7m7[m[12;1H[18;39H[7m8[m[13;1H[18;39H[7m9[m[14;1H[18;38H[7m80[m[15;1H[18;39H[7m1[m[16;1H[18;39H[7m2[m[A[H
[K[3;9H        printf("%d"[m,one[j] );[4;9H                ++j;[5;9H                ++count;[6;9H        }[K
[K
                rotate(one,count);[9;17Hcount=0;

}[K
[K
[K
[K

[K
[K[18;33H[7mBot L83[m[10;1H[18;39H[7m4[m[11;1H[18;39H[7m5[m[12;1H[18;39H[7m4[m[11;1H[18;39H[7m3[m[10;1H[18;39H[7m2[m[9;1H[18;39H[7m1[m[8;1H[18;39H[7m0[m[7;1H[18;38H[7m79[m[6;1H[18;39H[7m8[m[5;1H[18;39H[7m7[m[4;1H[18;39H[7m6[m[H

[3;9H[3;17H[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[K[18;10H[7m**[m[3;37H[K[C[K[K[K[K[K[K[K[7m[1m"[m%d                       [m
                        ++j;                     [m
[3;27H [m [m[K
                        ++j;[K[3;24H[K[K[K[K[K[K[K[3;17H[18;39H[7m5[m[2;17H[2;9Hj=0;
[1m[4mFILE[m* [1min[m;[4;9H[1m[4mFILE[m* [1mfp[m;[K[5;9Hi=0;[K
in = stdin;[7;9Hfprintf(in,"%s"[m,stdin);[8;17H[1mwhile[m(fscanf(in,"%d"[m, &one[j])!=\
EOF)[K[10;17H{
[K[13;25H++j;
++count;[15;17H}

rotate(one,count);
[7m88% L74[m[10;17H[19;1Hr C-h) [16;1H[7m-=--(DOS)**--F1  [m[7m[1mrotater.c   [m[7m   88% L74    (C/l A[m
Save file /home/kfosmire/public_html/csc344/assi\
gnments/01/c/rotater.c? (y, n, !, ., q, C-r, d o\
[19;8Hr C-h) y[17;1HSave file /home/kfosmire/public_html/csc344/assi
gnments/01/c/rotater.c? (y, n, !, ., q, C-r, d o[19;9H[K[17;4Hing file /home/kfosmire/public_html/csc344/as
signments/01/c/rotater.c...[K[10;17H[17;1HWrote /home/kfosmire/public_html/csc344/assignme
nts/01/c/rotater.c[K[10;17H[16;1H[K
                rotate(one,count);[K
[7m-=--(DOS)----F1  [m[7m[1mrotater.c   [m[7m   88% L74    (C/l A[m
[10;17H[19;1H[K[?1l>altair - kfosmire - c > make
gcc -g -c  rotater.c
gcc -g -o rotater.cgi rotater.o  -R /user/sfw/lib -lm
altair - kfosmire - c > makeemacs rotater.c[15D./rotater.cgi < data.txt
Content-type: plain/text

-100, 0, 50, 0
altair - kfosmire - c > exit
exit

script done on Mon Feb 17 19:37:57 2014
