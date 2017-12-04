# Makefile
CC = gcc
CFLAGS = -g
LFLAGS = -R /user/sfw/lib -lm
OBJS = rotater.o
EXEC = rotater.cgi
LIBS =
INCS =
$(EXEC) : $(OBJS)
	$(CC) $(CFLAGS) -o $(EXEC) $(OBJS) $(LIBS) $(LFLAGS)
.c.o: 
	$(CC) $(CFLAGS) -c $(INCS) $*.c

clean :
	rm -f $(OBJS) $(EXEC)
