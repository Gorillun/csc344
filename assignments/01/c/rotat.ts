Script started on Thu Feb 13 09:00:03 2014
altair - kfosmire - c > exitscript rotate.ts[16Dmake[Kcd c..[5D./fraction four 2 11 42[19Dmake[Kcd b..[K./change -u hogfeet[19Dmake[Kcd a01public_html/csc344/assignments[33Dexit[Kscript rotate.c[15Dgcc rotate.c -o rotate[22Dcd 01/c[K[7Dgcc rotate.c -o rotate
Undefined                       first referenced
 symbol                             in file
cos                                 /var/tmp//ccYqKjE9.o
sin                                 /var/tmp//ccYqKjE9.o
ld: fatal: symbol referencing errors. No output written to rotate
collect2: ld returned 1 exit status
altair - kfosmire - c > gcc rotate.c -o rotate [@ -[@- [@l [@m  [@ -
altair - kfosmire - c > ./rotate data.txt
90
0
100
0
-50
1.570000
Content-type: text/plain
-100, 0, 50, 0
altair - kfosmire - c > emacs rotate.c










[?1h=[H[2J[17;1H[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Fundamental)-------------------[m
[A[H[>0c[18;1H("emacs" "rotate.c")[K[H[7mFile Edit Options Buffers Tools Lisp-Interaction Help                  [m
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
[7m-=--:----F1  [m[7m[1m*scratch*   [m[7m   All L1     (Lisp Interaction)--------------[m
[A[H
[18;1HFor information about GNU Emacs and the GNU system, type C-h C-a.[H
[18;1HFor information about GNU Emacs and the GNU system, type C-h C-a.[K[H[7mFile Edit Options Buffers Tools C Help                                 [m
[A
[1m#include[m<stdio.h>[m[K
[1m#include[m<stdlib.h>[m[K
[1m#include[m <ctype.h>[m[K
[1m#include[m <string.h>[m[K
[1m#include[m <math.h>[m[K
[K
[1m#define[m [1mWRITEONLY[m "w"[m[K
[1m#define[m [1mREADONLY[m "r"[m[K
[K
[K
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)[K
{[K
        [1m[4mint[m [1mout[m;[K
        [1mif[m(d<0)[K
        {[K
[7m-=--(DOS)----F1  [m[7m[1mrotate.c    [m[7m   Top L1     (C/l Abbrev)----------------[m
[A[H
[18;1H[K[17;38H[7m2[m[H

[17;38H[7m3[m[4;1H[17;38H[7m4[m[5;1H[17;38H[7m5[m[6;1H[17;38H[7m6[m[7;1H[17;38H[7m7[m[8;1H[17;38H[7m8[m[9;1H[17;38H[7m9[m[10;1H[17;38H[7m10[m[11;1H[17;39H[7m1[m[12;1H[17;39H[7m2[m[13;1H[17;39H[7m3[m[14;1H[17;39H[7m4[m[15;1H[17;39H[7m5[m[A[H
[K
[K
[1m[4mint[m [7m[1mroundIt[m([1m[4mfloat[m [1md[m)
{[K
        [1m[4mint[m [1mout[m;[K[7;9H[1mif[m(d<0)
        {[K
                out = d-.5;[10;9H}
[1melse[m
        {[K
                out = d+.5;[14;9H}[K
[K[16;9H[1mreturn[m out;[17;33H[7m13% L16[m[9;1H[17;39H[7m7[m[10;1H[17;39H[7m8[m[11;1H[17;39H[7m9[m[12;1H[17;38H[7m20[m[13;1H[17;39H[7m1[m[14;1H[17;39H[7m2[m[15;1H[17;39H[7m3[m[A[2;9H}
[1melse[m
        {[K
                out = d+.5;[6;9H}[K
[K[8;9H[1mreturn[m out;
}[K
[K
[7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
[8P[13;9H[1m[4mint[m   [1mcount[m =c;[K[14;9H[1m[4mdouble[m [1mtemp[m[count];[15;9H[1m[4mint[m [1mi[m,[1mj[m;[16;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;
[7m8% L24[m[9;1H[17;39H[7m5[m[10;1H[17;39H[7m6[m[11;1H[17;39H[7m7[m[12;1H[17;39H[7m8[m[13;1H[17;39H[7m9[m[14;1H[17;38H[7m30[m[15;1H[17;39H[7m1[m[A[H
[K
[7m[1mrotate[m([1m[4mint[m [1min[m[], [1m[4mint[m [1mc[m)
[8P[5;9H[1m[4mint[m   [1mcount[m =c;[K[6;9H[1m[4mdouble[m [1mtemp[m[count];[7;9H[1m[4mint[m [1mi[m,[1mj[m;[8;9H[1m[4mfloat[m [1mtheta[m = (in[0]*3.14)/180;
        [1m[4mfloat[m [1mtest[m = sin(theta);[10;9Hprintf("%f\n"[m,theta);
        [1mfor[m(i=1;i<c;++i)
[8@[13;9H        [1mif[m(i%2!=0)[14;9H          temp[i-1]=(in[i]*cos(theta))-(in[i+1]*sin(theta));[15;9H        [1melse[m[16;9H          temp[i-1]=(in[i-1]*sin(theta))-(in[i]*cos(theta));[17;33H[7m22% L32[m[9;1H[17;39H[7m3[m[10;1H[17;39H[7m4[m[11;1H[17;39H[7m5[m[12;1H[17;39H[7m6[m[13;1H[17;39H[7m7[m[14;1H[17;39H[7m8[m[15;1H[17;39H[7m9[m[A[2;9Hprintf("%f\n"[m,theta);
        [1mfor[m(i=1;i<c;++i)
[8@[5;9H        [1mif[m(i%2!=0)[6;9H          temp[i-1]=(in[i]*cos(theta))-(in[i+1]*sin(theta));[7;9H        [1melse[m[8;9H          temp[i-1]=(in[i-1]*sin(theta))-(in[i]*cos(theta));
[K[10;9H}[K
printf("Content-type: text/plain\n"[m);[12;9H[1mfor[m(j=0;j<c-2;++j)[13;9H{[K[14;17Hprintf("%i, "[m,roundIt(temp[j]));[K
[K[16;9H}[K[17;33H[7m34% L40[m[9;1H[17;39H[7m1[m[10;1H[17;39H[7m2[m[11;1H[17;39H[7m3[m[12;1H[17;39H[7m4[m[13;1H[17;39H[7m5[m[14;1H[17;39H[7m6[m[15;1H[17;39H[7m7[m[A[2;9H}[K
printf("Content-type: text/plain\n"[m);[4;9H[1mfor[m(j=0;j<c-2;++j)[5;9H{[K[6;17Hprintf("%i, "[m,roundIt(temp[j]));[K
[K[8;9H}[K
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
[8P[14;9H[1m[4mint[m [1mtwo[m[100];[K[15;9H[1m[4mint[m [1mone[m[100];[16;9H[1m[4mint[m [1mi[m =0;[17;33H[7m50% L48[m[9;1H[17;39H[7m9[m[10;1H[17;39H[7m8[m[9;1H[17;39H[7m7[m[8;1H[17;39H[7m8[m[9;1H[9;9H[C[C[C[C[C[17;39H[7m7[m[8;10H[17;39H[7m8[m[9;14H[17;39H[7m9[m[10;9H[17;38H[7m50[m[11;2H[17;39H[7m1[m[12;14H[17;39H[7m2[m[13;2H[17;39H[7m3[m[14;14H[17;39H[7m4[m[15;14H[17;39H[7m5[m[16;14H[H
[K
}[K
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])
[8P[6;9H[1m[4mint[m [1mtwo[m[100];[K[7;9H[1m[4mint[m [1mone[m[100];[8;9H[1m[4mint[m [1mi[m =0;[9;9H[1m[4mint[m [1mj[m;[K[10;9H[1m[4mint[m [1mcount[m=0;
        [1m[4mFILE[m *[1mfp[m;
        fp = fopen(argv[1],READONLY);
        [1mif[m(argc!=2)[14;9H{[K
        printf("no file address\n"[m);[16;9H}[K[17;33H[7m62% L56[m[9;14H[17;39H[7m7[m[10;14H[17;39H[7m8[m[11;14H[17;39H[7m9[m[12;14H[17;38H[7m60[m[13;14H[17;39H[7m1[m[14;10H[17;39H[7m2[m[15;9H[17;39H[7m3[m[16;10H[2;9H[1m[4mint[m [1mcount[m=0;
        [1m[4mFILE[m *[1mfp[m;
        fp = fopen(argv[1],READONLY);
        [1mif[m(argc!=2)[6;9H{[K
        printf("no file address\n"[m);[8;9H}[K
[1melse[m [1mif[m(fp==[1m[4mNULL[m)[10;9H{[K
        printf("cannot open\n"[m);[12;9H}[K
[1melse[m[K[14;17H[1mwhile[m(fscanf(fp,"%i "[m,&one[i])!= EOF)[15;17H{[K
[K[17;33H[7m70% L64[m[9;14H[17;39H[7m5[m[10;10H[17;39H[7m6[m[11;9H[17;39H[7m7[m[12;10H[17;39H[7m8[m[13;13H[17;39H[7m9[m[14;10H[17;38H[7m70[m[15;9H[17;39H[7m1[m[16;9H[2;9H{[K
        printf("cannot open\n"[m);[4;9H}[K
[1melse[m[K[6;17H[1mwhile[m(fscanf(fp,"%i "[m,&one[i])!= EOF)[7;17H{[K
[K[9;9H                printf("%i\n"[m,one[i]);[10;9H                ++i;[11;17H        ++count;[K[12;9H[8@
        [1mif[m(fclose(fp)==EOF)[14;9H                printf("cannot close\n"[m);[K
[K[16;9H}[17;33H[7m81% L72[m[9;9H[17;39H[7m3[m[10;9H[17;39H[7m4[m[11;9H[17;39H[7m5[m[12;9H[17;39H[7m6[m[13;9H[17;39H[7m7[m[14;9H[17;39H[7m8[m[15;9H[17;39H[7m9[m[16;10H[2;9H                ++i;[3;17H        ++count;[K[4;9H[8@
        [1mif[m(fclose(fp)==EOF)[6;9H                printf("cannot close\n"[m);[K
[K[8;9H}
rotate(one, count);[K
}[K
[K
[K
[K
[K

[K[17;33H[7mBot L80[m[9;14H[17;39H[7m1[m[10;2H[17;39H[7m2[m[11;1H[17;39H[7m1[m[10;2H[17;39H[7m0[m[9;14H[17;38H[7m79[m[8;10H[17;39H[7m8[m[7;9H[17;39H[7m7[m[6;9H[17;39H[7m6[m[5;9H[17;39H[7m5[m[4;9H[17;39H[7m4[m[3;9H[17;39H[7m3[m[2;9H{[K[3;17Hprintf("cannot open\n"[m);[4;9H[8P
[1melse[m[K
{       [1mwhile[m(fscanf(fp,"%i "[m,&one[i])!= EOF)[7;17H{
[K[9;9H                printf("%i\n"[m,one[i]);
                        ++i;
++count;[12;17H}
[1mif[m(fclose(fp)==EOF)[14;25Hprintf("cannot close\n"[m);[16;9H}[17;33H[7m81% L72[m[9;9H[17;39H[7m1[m[8;9H[17;39H[7m0[m[7;9H[17;38H[7m69[m[6;10H[17;39H[7m8[m[5;13H[17;39H[7m7[m[4;10H[17;39H[7m6[m[3;9H[17;39H[7m7[m[4;10H[17;39H[7m8[m[5;13H[17;39H[7m9[m[6;10H[17;38H[7m70[m[7;9H[17;39H[7m1[m[8;9H[17;39H[7m2[m[9;9H[17;39H[7m3[m[10;9H[17;39H[7m4[m[11;9H[17;39H[7m5[m[12;9H[17;39H[7m6[m[13;9H[17;39H[7m7[m[14;9H[17;39H[7m8[m[15;9H[17;39H[7m9[m[16;10H[2;9H                ++i;[3;17H        ++count;[K[4;9H[8@
        [1mif[m(fclose(fp)==EOF)[6;9H                printf("cannot close\n"[m);[K
[K[8;9H}
rotate(one, count);[K
}[K
[K
[K
[K
[K

[K[17;33H[7mBot L80[m[9;14H[17;38H[7m79[m[8;10H[17;39H[7m8[m[7;9H[17;39H[7m7[m[6;9H[17;39H[7m6[m[5;9H[17;39H[7m5[m[4;9H[17;39H[7m4[m[3;9H[17;39H[7m3[m[2;9H{[K[3;17Hprintf("cannot open\n"[m);[4;9H[8P
[1melse[m[K
{       [1mwhile[m(fscanf(fp,"%i "[m,&one[i])!= EOF)[7;17H{
[K[9;9H                printf("%i\n"[m,one[i]);
                        ++i;
++count;[12;17H}
[1mif[m(fclose(fp)==EOF)[14;25Hprintf("cannot close\n"[m);[16;9H}[17;33H[7m81% L72[m[9;9H[17;39H[7m1[m[8;9H[17;39H[7m0[m[7;9H[17;38H[7m69[m[6;10H[17;39H[7m8[m[5;13H[17;39H[7m7[m[4;10H[17;39H[7m6[m[3;9H[17;39H[7m5[m[2;10H[1m[4mint[m [1mcount[m=0;[3;9H[1m[4mFILE[m *[1mfp[m;[K[4;9Hfp = fopen(argv[1],READONLY);[5;9H[1mif[m(argc!=2)[6;10H[K[7;17Hprintf("no file address\n"[m);[8;9H}
[1melse[m [1mif[m(fp==[1m[4mNULL[m)[K[10;9H{[K[11;17Hprintf("cannot open\n"[m);[12;9H[8P
[1melse[m[K
{       [1mwhile[m(fscanf(fp,"%i "[m,&one[i])!= EOF)[15;17H{
[K[17;33H[7m70% L64[m[9;14H[17;39H[7m3[m[8;10H[17;39H[7m2[m[7;9H[17;39H[7m1[m[6;10H[17;39H[7m0[m[5;14H[17;38H[7m59[m[4;14H[17;39H[7m8[m[3;14H[17;39H[7m7[m[2;14H[K
}[K
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])[K
{[K[6;9H[1m[4mint[m [1mtwo[m[100];[7;9H[1m[4mint[m [1mone[m[100];[K[8;9H[1m[4mint[m [1mi[m =0;[9;9H[1m[4mint[m [1mj[m;[K[10;9H[1m[4mint[m [1mcount[m=0;[11;9H[1m[4mFILE[m *[1mfp[m;[K[12;9Hfp = fopen(argv[1],READONLY);[13;9H[1mif[m(argc!=2)[14;10H[K[15;17Hprintf("no file address\n"[m);[16;9H}[17;33H[7m62% L56[m[9;14H[17;39H[7m5[m[8;14H[17;39H[7m4[m[7;14H[17;39H[7m3[m[6;14H[17;39H[7m2[m[5;2H[17;39H[7m1[m[4;14H[17;39H[7m0[m[3;2H[17;38H[7m49[m[2;9H}
        printf("Content-type: text/plain\n"[m);
        [1mfor[m(j=0;j<c-2;++j)[K
[8@[6;9H        printf("%i, "[m,roundIt(temp[j]));
[K[8;9H}[K
printf("%i\n"[m,roundIt(temp[j]));
[K
}[K
[1m[4mint[m [7m[1mmain[m([1m[4mint[m [1margc[m, [1m[4mchar[m *[1margv[m[])[K
{[K[14;9H[1m[4mint[m [1mtwo[m[100];[15;9H[1m[4mint[m [1mone[m[100];[K[16;9H[1m[4mint[m [1mi[m =0;[17;33H[7m50% L48[m[9;14H[17;39H[7m7[m[8;10H[17;39H[7m6[m[7;9H[17;39H[7m5[m[6;9H[17;39H[7m4[m[5;10H[17;39H[7m3[m[4;14H[17;39H[7m2[m[3;14H[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[3;16H[7m[1m"[mContent-type: text/plain\n\");                         [m
        for(j=0;j<c-2;++j)                                             [m
[17;10H[7m**[m[3;44H[3;16H"Content-type: text/plain\n\n"[m);[K
        [1mfor[m(j=0;j<c-2;++j)[K[3;45H[18;1H (y, n, !, ., q, C-r, d or C-h) [16;1H[7m-=--(DOS)**--F1  [m[7m[1mrotate.c    [m[7m   50% L42    (C/l Abbrev)----------------[m
Save file /home/kfosmire/public_html/csc344/assignments/01/c/rotate.c?\
[18;33H (y, n, !, ., q, C-r, d or C-h) y[ASave file /home/kfosmire/public_html/csc344/assignments/01/c/rotate.c?[18;34Hc...[K[Aing file /home/kfosmire/public_html/csc344/assignments/01/c/rotate.[3;45H[18;1H[K[AWrote /home/kfosmire/public_html/csc344/assignments/01/c/rotate.c[K[3;45H[16;1H        [1m[4mint[m [1mi[m =0;[K
[7m-=--(DOS)----F1  [m[7m[1mrotate.c    [m[7m   50% L42    (C/l Abbrev)----------------[m
[3;45H[18;1H[K[?1l>altair - kfosmire - c > emacs rotate.c[14D./rotate data.txt[17Demacs rotate.c[K[14D./rotate data.txt[17Dgcc rotate.c -lm -o rotate
altair - kfosmire - c > gcc rotate.c -lm -o rotate[26Demacs rotate.c[K[14D./rotate data.txt
90
0
100
0
-50
1.570000
Content-type: text/plain

-100, 0, 50, 0
altair - kfosmire - c > exit
exit

script done on Thu Feb 13 09:01:53 2014
