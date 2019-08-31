from tkinter import *
root = Tk()
root.geometry("350x300+400+200")
root.resizable(0,0)
root.title("Flames")
root.config(background = "maroon")

c,b=0,0
f = []

def find_flame():
	global f,c,b
	str1 = e1.get()
	str2 = e2.get()
	for i in e1.get():

    		if i in e2.get():
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
	if s == 'F':
		s = 'FRIENDS'
	elif s == 'L':
		s = 'LOVE'
	elif s == 'A':
		s = 'AFFECTIONATE'
	elif s == 'M':
		s = 'MARRIAGE'
	elif s == 'E':
		s = 'ENEMIES'
	elif s == 'S':
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