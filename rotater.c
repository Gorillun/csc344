#include<stdio.h>
#include<stdlib.h>
#include <ctype.h>
#include <string.h>
#define WRITEONLY "w"
#define READONLY "r"
int roundIt(float d)
{	
	int out;
	if(d<0)
	{
		out = d-.5;
	}
	else
	{
		out = d+.5;
	}
	
	return out;
}
rotate(int in[], int c)
{	
	int   count =c;
	float temp[count];
	int i,j;
	
	float theta = (in[0]*3.14)/180;
	
	
	for(i=1;i<c;++i)
	{
		if(i%2!=0)
			temp[i-1]=(in[i]*cos(theta))-(in[i+1]*sin(theta));
		else
			temp[i-1]=(in[i-1]*sin(theta))-(in[i]*cos(theta));
		
	}
	printf("Content-type: plain/text\n\n");
	for(j=0;j<c-2;++j)
	{
		printf("%i, ",roundIt(temp[j]));
		
	}
	printf("%i\n",roundIt(temp[j]));
	
}
int main(int argc, char *argv[])
{
	int two[100];
	int one[100];
	int i =0;
	int j;
	int count=0;
	FILE* fp;
	if(argv[3]!=NULL)
	{
	fp = fopen(argv[1],READONLY);
	if(fp==NULL)
	{
		printf("cannot open\n");
	}
	else
	{	while(fscanf(fp,"%i ",&one[i])!= EOF)
		{
			++i;
			++count;
		}
		if(fclose(fp)==EOF)
			printf("cannot close\n");
	}
	rotate(one,count);
	}
	else
	{
		printf("Content-type: plain/text\n\n");
		printf(" 0, 0, 0, 0\n");
	}
	
}
