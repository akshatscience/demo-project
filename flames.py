from tkinter import *
root = Tk()
root.geometry("350x300+400+200")
root.resizable(0,0)
root.title("Flames")
root.config(background = "maroon")

c,b=0,0
f = []
s=''
def find_flame():
	global f,c,b,st
	str1 = e1.get()
	str2 = e2.get()
	for i in str1: 
		if i in str2:
			str1 = str1.replace(i,'',1)
			str2 = str2.replace(i,'',1)

        
	c = len(str1)+len(str2)
	Smain = 'FLAMES'
	for i in Smain:
	    f.append(i)
	x = len(f)
	while(x!=1):
	    if(c%x)!=0:
	        b = (c%x)-1
	        f.remove(f[b])
	        
	    else:
	        f.remove(f[x-1])
	       
	    x-=1
	s = f[x-1]
	del(f[x-1])
	if s == 'F':
		s = 'FRIENDS'
		
	if s == 'L':
		s = 'LOVE'
	
	if s == 'A':
		s = 'AFFECTIONATE'
		
	if s == 'M':
		s = 'MARRIAGE'
		
	if s == 'E':
		s = 'ENEMIES'
		
	if s == 'S':
		s = 'SIBLINGS'
		
	l.config(text=s)

n = StringVar()
n1 = StringVar()
e1 = Entry(root,text = n,font=(15))
e1.pack(pady = "10")
e2 = Entry(root,text = n1,font=(15))
e2.pack(pady = "10")
b = Button(root,text = "find your flames",relief="groove",foreground = "black",command= find_flame)
b.pack(pady = "20")


l = Label(root,text = 'FLAMES',font=(20),background="maroon")
l.pack(pady="8")


root.mainloop()