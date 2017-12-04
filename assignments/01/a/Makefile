# Makefile
CC = gcc
CFLAGS = -g
OBJS =  change.o
EXEC =  change
LIBS =
INCS =
$(EXEC) : $(OBJS)
	$(CC) $(CFLAGS) -o $(EXEC) $(OBJS) $(LIBS)
.c.o: 
	$(CC) $(CFLAGS) -c $(INCS) $*.c

clean :
	rm -f $(OBJS) $(EXEC)
