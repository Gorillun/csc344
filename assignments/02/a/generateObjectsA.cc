/* Keith Fosmire
   Assignment 2a
   Due 7 March 2014
  *Program accepts a number ans a base and returns the alpha/numeric response in order.
  *Utilising the Vector<T> class, the information is generated then stored for printing or manipulation.
  *Using namespace to make global variables for both classes
  *
*/

#include <iostream>
#include<cstring>
#include<sstream>
#include<stdlib.h>
#include<vector>
#include "ids.h"
using namespace std;
/*stores variables*/
using namespace ids;
/*class does the grunt work of data manipulation and number generations*/
class Bogie
{
  /*declaring private variables for the Bogie class*/
  private:
  /*vector used for storage of manipulated data*/
  vector<string> pts;
	/*private class manipulates data then stores as a string*/
     void setID()
     {
		/*calling vaiables from the ids.h file
		Pre-condition: main must set the variables first*/
       int numbers = id.n;
       int base = id.b;
       int max = id.m;
	   /*these are stored strings for building the return ids*/
       string numeros[10]={"0","1","2","3","4","5","6","7","8","9"};
	   /*set this array using int numbers
	      Pre-Condition: ids.h must be populated*/
       string ids[numbers];
	   /*initialized an array of the alphabet*/
       string alphas[26] = {"A","B","C","D","E","F","G",
			  "H","I","J","K","L","M","N",
			  "O","P","Q","R","S","T","U",
			  "W","X","Y","Z"};
       int x=0;
       int i=0;
      /*setting the seed for rand() using the time() method*/
       srand(time(NULL));
	   /* loop generates numbers/alphas and stores in a the vector*/
       while(i<numbers)
	 {
	   
	   int a=0;
	   int j=0;
	   /*generates the string*/
	   while(a<base&&i<numbers)
	     { 
				/*the stores digits less than 10*/
				if(a<10&&x==0)
				{
					pts.push_back(numeros[a]);
				}/*digits with two numbers*/
				else if(a<10)
				{
					pts.push_back( numeros[x]+numeros[a]);
				}/*alphas with out a digits*/
				else if(x==0)
				{
					pts.push_back(alphas[j]);
					++j;
				}/*digits and alphas*/
				else
				{
					pts.push_back(numeros[x]+alphas[j]);
					++j;
				}
	       ++i;
	       ++a;
	     }//end of inner loop
	   ++x;
	 }//end of outer loop
     }
  /*declaring public variables and methods*/
  public:
	/* constructor calls setID() in private*/
     Bogie()
     {
       setID();
     }
	 /*this method returns a vector with ids in proper format*/
     vector<string> getID()
     {
       return pts;
     }

};
/***********************************************************************************************
************************************************************************************************
*******************MAIN******************************************************/
int main(int argc, char *argv[])
{/* vector for receiving strings from bogie class*/
  vector<string> inPts;
  /*used to store incoming ints*/
  int number, base;
  /* Pre-Condition:checking the information from sender, amount of data */
  if(argc<4)
    {
      cout <<"Expected -n number -b base -m min/max random number"<<endl;
    }
	else
	{
      int x=1;
      while(x<argc)
		{
			string cmd=argv[x];
			if(cmd.compare("-n")==0)
				{
					id.n=atoi(argv[x+1]);
					++x;
				}
			else if(cmd.compare("-b")==0)
				{
					id.b=atoi(argv[x+1]);
					++x;
				}
			else if(cmd.compare("-m")==0)
				{
					id.m=atoi(argv[x+1]);
					++x;
				}
			else
					++x;
		}/*end of while loop*/      
    }
	/* Instantiating the Bogie class*/
  Bogie bog;
  /*getting the coordinates*/
  inPts=bog.getID();
  /*Creating vector iterator*/
  vector<string>::iterator it =inPts.begin();
  /*printing to screen*/
  while(it != inPts.end())
    {
      cout<<*it<<", ";
      ++it;
    }
  cout<<"\n";
  return 0;
    
}
