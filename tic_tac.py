import tkinter 
from tkinter import *
from tkinter import messagebox
root = Tk()

root.geometry("400x250")
root.resizable(0,0)
root.title("Tic Tac Toe")
root.config(background = "violet")

tap = True

def click(buttons):
	global tap
	if buttons["text"] == " " and tap == True:
		buttons["text"] = "X"
		tap = False

	elif buttons["text"] == " " and tap == False:
		buttons["text"] = "O"
		tap = True

	elif ((bt1["text"] == "X" and bt2["text"] == "X" and bt3["text"] == "X") or  
		(bt1["text"] == "X" and bt4["text"] == "X" and bt7["text"] == "X") or 
		(bt1["text"] == "X" and bt5["text"] == "X" and bt9["text"] == "X") or
		(bt3["text"] == "X" and bt5["text"] == "X" and bt7["text"] == "X") or
		(bt3["text"] == "X" and bt6["text"] == "X" and bt9["text"] == "X") or 
		(bt2["text"] == "X" and bt5["text"] == "X" and bt8["text"] == "X") or
		(bt4["text"] == "X" and bt5["text"] == "X" and bt6["text"] == "X") or
		(bt7["text"] == "X" and bt8["text"] == "X" and bt9["text"] == "X")):
		messagebox.showinfo("Player X Wins")

	elif ((bt1["text"] == "O" and bt2["text"] == "O" and bt3["text"] == "O") or  
		(bt1["text"] == "O" and bt4["text"] == "O" and bt7["text"] == "O") or 
		(bt1["text"] == "O" and bt5["text"] == "O" and bt9["text"] == "O") or
		(bt3["text"] == "O" and bt5["text"] == "O" and bt7["text"] == "O") or
		(bt3["text"] == "O" and bt6["text"] == "O" and bt9["text"] == "O") or 
		(bt2["text"] == "O" and bt5["text"] == "O" and bt8["text"] == "O") or
		(bt4["text"] == "O" and bt5["text"] == "O" and bt6["text"] == "O") or
		(bt7["text"] == "O" and bt8["text"] == "O" and bt9["text"] == "O")):
		messagebox.showinfo("Player O Wins")

	else:
		messagebox.showerror("Match Tie")


buttons = StringVar()

l = Label(root,text = "player X:",font = ("verdana",12),fg="purple")
l.grid(row =2 ,column =1,pady = "6",padx ="50")

l = Label(root,text = "player O:",font = ("verdana",12),fg="purple")
l.grid(row =3 ,column =1,pady = "6")

bt1 = Button(root,text =" ",relief = "groove",bg="white",width = "2",command = lambda : click(bt1))
bt1.grid(row =2 ,column =2,ipadx = "10",ipady = "10")

bt2 = Button(root,text = " " ,relief = "groove",bg="white",width = "2",command = lambda : click(bt2))
bt2.grid(row=2,column = 3,ipadx = "10",ipady = "10")

bt3 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda : click(bt3))
bt3.grid(row=2,column=4,ipadx = "10",ipady = "10")

bt4 = Button(root,text =" ",relief = "groove",bg="white",width = "2",command = lambda: click(bt4))
bt4.grid(row =3,column=2,ipadx = "10",ipady = "10")

bt5 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda : click(bt5))
bt5.grid(row =3,column=3,ipadx = "10",ipady = "10")

bt6 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda : click(bt6))
bt6.grid(row=3,column = 4,ipadx = "10",ipady = "10")

bt7 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda: click(bt7))
bt7.grid(row=4,column = 2,ipadx = "10",ipady = "10")

bt8 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda: click(bt8))
bt8.grid(row=4,column = 3,ipadx = "10",ipady = "10")

bt9 = Button(root,text = " ",relief = "groove",bg="white",width = "2",command = lambda: click(bt9))
bt9.grid(row=4,column =4,ipadx = "10",ipady = "10")



root.mainloop()