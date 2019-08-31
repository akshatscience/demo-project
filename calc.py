from tkinter import *
root = Tk()
root.geometry("350x300+450+200")
root.resizable(0,0)
root.title("calculator")

expression = ""

def equate(num):
	global expression
	expression = expression + str(num)
	n.set(expression)

def equal():
	global expression
	total = str(eval(expression))
	n.set(total)
	expression = ""
	expression = expression+total
	n.set(expression)


def clear():
	e.delete(0,END)


n = StringVar()

e = Entry(root,text = n,font = ("15"))
e.pack(fill ="both",pady ="6",ipady="10")

f1 = Frame(root,background="Black")
f1.pack(expand = True ,fill = "both")

f2 = Frame(root,background="yellow")
f2.pack(expand = True,fill = "both")

f3 = Frame(root,background="red")
f3.pack(expand = True,fill = "both")

f4 = Frame(root,background="Blue")
f4.pack(expand = True,fill = "both")


b1 = Button(f1,relief = "raised",text = "1",command = lambda: equate(1))
b1.pack(side = "left",expand=True,fill = "both")

b2 = Button(f1,relief = "raised",text = "2",command = lambda: equate(2))
b2.pack(side = "left",expand=True,fill = "both")

b3 = Button(f1,relief = "raised",text = "3",command = lambda: equate(3))
b3.pack(side = "left",expand=True,fill = "both")

bminus = Button(f1,relief = "raised",text = "-",command = lambda: equate("-"))
bminus.pack(side = "left",expand=True,fill = "both")

b4 = Button(f2,relief = "raised",text = "4",command = lambda : equate(4))
b4.pack(side = "left",expand=True,fill = "both")


b5 = Button(f2,relief = "raised",text = "5",command = lambda : equate(5))
b5.pack(side = "left",expand = True ,fill = "both")

b6 = Button(f2,relief = "raised",text = "6",command = lambda : equate(6) )
b6.pack(side = "left",expand = True ,fill = "both")

b7 = Button(f3,relief = "raised",text = "7",command = lambda : equate(7))
b7.pack(side = "left",expand=True,fill = "both")

bplus = Button(f2,relief = "raised",text = "+",command = lambda: equate("+"))
bplus.pack(side = "left",expand = True ,fill = "both")

b8 = Button(f3,relief = "raised",text = "8",command = lambda: equate(8))
b8.pack(side = "left",expand=True,fill = "both")

b9 = Button(f3,relief = "raised",text = "9",command = lambda: equate(9))
b9.pack(side = "left",expand=True,fill = "both")

b0 = Button(f4,relief = "raised",text = "0",command = lambda : equate(0))
b0.pack(side = "left",expand=True,fill = "both")

bmul = Button(f3,relief = "raised",text = "x",command = lambda:equate("*"))
bmul.pack(side = "left",expand=True,fill = "both")

bdiv = Button(f4,relief = "raised",text = "/",command = lambda:equate("/"))
bdiv.pack(side = "left",expand=True,fill = "both")

bequal = Button(f4,relief = "raised",text = "=",command = equal )
bequal.pack(side = "left",expand=True,fill = "both")

bc = Button(f4,relief = "raised",text = "c",command = clear)
bc.pack(side = "left",expand=True,fill = "both")





root.mainloop()