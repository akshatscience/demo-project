from random import *
from tkinter import *
from tkinter import messagebox

root = Tk()

root.geometry("450x350+400+200")
root.title("Jumbled")
root.config(background='seagreen')

words = ['sahakt',
		'aajv',
		'ythonp',
		'pytejur',
		'arsm',
		'rogf',
		'iheld',
		'saasm',
		'akhnjadrh']		

ans = ['akshat',
		'java',
		'python',
		'jupyter',
		'mars',
		'frog',
		'delhi',
		'assam',
		'jharkhand',
		]


s = randrange(len(words))


def put():
	global words,ans,s
	l.config(text = words[s])

def check():
	global words ,ans ,s
	if (e.get() == ans[s]):
			messagebox.showinfo('Level cleared!!')
			reset()
	else:
		e.delete(0,END)
		messagebox.showerror('!!Try again!!')


def reset():
	global words,s
	e.delete(0,END)
	s = randrange(len(words))

	l.config(text = words[s])





l = Label(root,text='s',font=(20),foreground='blue',background='seagreen')
l.pack(ipady=4,ipadx=10)

e = Entry(root,text = ans , font=(18))
e.pack(ipadx = 50,pady = 25)

bt1 = Button(root,text='check',relief ='flat',command =check)
bt1.pack(pady=3,ipadx=10)

bt2 = Button(root,text='reset',relief='flat',command=reset)
bt2.pack(pady=9,ipadx=10)






put()
root.mainloop()