# Makefile template for C++ compiler "g++"
# Macros to change for each new makefile:
#   OBJS = list of all the ".o" files to be made from ".cc" files
#   HDRS = list of all the ".h" files
#   EXEC = name of executable file
#
CMPL	=	g++
CFLAGS	=	-g
LFLAGS	= -R /usr/sfw/lib
# LFLAGS	=
OBJS	=	generateObjectsC.o 
HDRS	=	ids.h
EXEC	=	generateObjectsC

.SUFFIXES: .cc
.cc.o:
	$(CMPL) -c $(CFLAGS) $*.cc

$(EXEC): $(OBJS)
	$(CMPL) -o $(EXEC) $(OBJS) $(LFLAGS)

$(OBJS): $(HDRS)

clean:
	rm -f $(OBJS) $(EXEC)