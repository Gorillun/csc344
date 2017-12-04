/* Keith Fosmire
   Assignment 2B
   Due 7 March 2014
   *Program accepts a number,base and max coordinates range then returns the alpha/numeric response in order.
  *Utilising the Vector<T> class, the information is generated then stored for printing or manipulation.
  *Using List<T> and Pair<T,T> to store and move strings and integers. 
  *Using namespace to make global variables for both classes
*/

#include <iostream>
#include<cstring>
#include<sstream>
#include<stdlib.h>
#include<list>
#include<utility>
#include<vector>
#include "ids.h"
using namespace std;
/*namespace for getting ids from ids.h*/
using namespace ids;
/*class does the grunt work of data manipulation and number generations*/
class Bogie
{
  private:
     /*private variables and methods*/
	 list< pair <int,int> > xy;
     vector<string> pts;
	 /*setting ids into vector*/
	 /*called by the constructor 
	 PreCondition: all ids.h variables must be set prior to calling*/
     void setID()
     {
       int numbers = id.n;
       int base = id.b;
       string numeros[10]={"0","1","2","3","4","5","6","7","8","9"};
       string ids[numbers];
       string alphas[26] = {"A","B","C","D","E","F","G",
			  "H","I","J","K","L","M","N",
			  "O","P","Q","R","S","T","U",
			  "W","X","Y","Z"};
       int x=0;
       int i=0;
		/*using numbers from user to loop through and fill the vector*/
     while(i<numbers)
		{
			int a=0;
			int j=0;
			/*making sure the base count does not exceed the total number count*/
			while(a<base&&i<numbers)
				{ /*looking for single digits*/
					if(a<10&&x==0)
					{
						pts.push_back(numeros[a]);
					}/*double digits without alphas*/
					else if(a<10)
					{
						pts.push_back( numeros[x]+numeros[a]);
					}/*alphas without numbers*/
					else if(x==0)
					{
						pts.push_back(alphas[j]);
						++j;
					}/*alphas and numeros*/
					else
					{
						pts.push_back(numeros[x]+alphas[j]);
						++j;
					}
					++i;
					++a;
				}
			++x;
		}
     }
/* this is called by the constructor, builds a vector of random number pairs */
  void coordinates()
  {/*planting a seed*/
    srand(time(0));
    int y =0;
	/*ensuring numbers extend to negative and positive ranges*/
    int max = id.m;
    int min = (2*max)+1;
    int count = id.n;
	/*setting random numbers as pairs to be added to points later*/
    while(y<count)
      { 
		int first = rand()%min + (-max);
		int second = rand()%min + (-max);
		xy.push_back( make_pair(first,second) );
		++y;
      }
  }
  
  public:
	/*constructor sets ids and coordinates*/
     Bogie()
     {
       setID();
       coordinates();
     }
	 /*returns a vector with the ids*/
     vector<string> getID()
     {
       return pts;
     }
	 /*returns x coordinates in a vector*/
      vector<int> getX()
     {
		/*pulling x from the coordinate pairs and places into vector*/
       list< pair<int,int> >:: iterator it = xy.begin();
       vector<int> xCor;
       while(it != xy.end())
		{
			xCor.push_back((*it).first);
			++it;
		}
	  return xCor;
     }
	 /*pulling y from coordinate pairs and places into a vector , returns vector*/
     vector<int> getY()
     {
       list< pair<int,int> >:: iterator it = xy.begin();
       vector<int> yCor;
       while(it != xy.end())
		{
			yCor.push_back((*it).second);
			++it;
		}
       return yCor;
     }
};
/*************************************************************************************************************
**************************************************************************************************************
*********************************MAIN**********************************************************************/

int main(int argc, char *argv[])
{
  vector<string> inPts;
  vector<int> xCo;
  vector<int> yCo;
  int number, base;
  /*checks for proper number of elements*/
  if(argc<4)
    {
      cout <<"Expected -n number -b base -m min/max random number"<<endl;
    }
      int x=1;
	  /**/
      while(x<argc)
	  {/*setting the variables in ids.h*/
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
	}      
   /*instantiating bogie class and retrieving data*/ 
  Bogie bog;
  inPts=bog.getID();
  xCo=bog.getX();
  yCo=bog.getY();
  /*setting iterators for all vectors*/
  vector<int>::iterator itY = yCo.begin();
  vector<int>::iterator itX = xCo.begin();
  vector<string>::iterator it =inPts.begin();
  while(it != inPts.end())
    {
      cout<<*it<<","<<*itX<<","<<*itY<<", ";
      ++itX;++it;++itY;
    }
  cout<<"\n";
  return 0;
    
}
