//Keith Fosmire
//CSC344 Assignment 1c
//Due 12 February 2014
/* Program uses input cartesian points to make a rotation matrix by using the Cosine and Sine of the given x and y coordinates. The output is the adjusted points. The program also runs as a Common Gateway Interface to interact with a javascript run web page to demonstrate a visual alteration in points*/
#include<stdio.h>
#include<stdlib.h>
#include <ctype.h>
#include <string.h>
#include <math.h>
#define WRITEONLY "w"
#define READONLY "r"
//******************************
int roundIt(float d)
{	//rounding points to the nearest whole #
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
void rotate(int in[], int c)
{	
	int   count =c;
	float temp[count];
	int i,j;
	
	float theta = (in[0]*3.14)/180;//convert to radians from degrees
	
	//switches between x and y
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
//****************************
int main(int argc, char *argv[])
{
	
	int one[100];
	char *data[100];
	int i =0;
	int j=0;
	int count;
	while(j<100)
	{
		one[j]=0;
		++j;
	}
	j=0;
	FILE* in;
	FILE* fp;
	i=0;
	in = stdin;
	fprintf(in,"%s",stdin);
		while(fscanf(in,"%d", &one[j])!=EOF)
		{
		
		
			++j;
			++count;
		}
		
		rotate(one,count);
		count=0;

}
