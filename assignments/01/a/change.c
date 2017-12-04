//Keith Fosmire
//CSC 344 Assignment 1a
//Due 12 February 2014
/* Program uses command prompt to change the case from lower to upper and upper to lower using the proper commands.
-u for upper(no commands==upper for default
-l for lower -s to alternate each letter in the character string.*/
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
