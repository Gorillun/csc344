//Keith Fosmire
//CSC 344 Assignment 1b
//Due 12 February 2014
/* This program is used to get the fraction of a given String by giving the String [space] numerator [space] denominator. */
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

