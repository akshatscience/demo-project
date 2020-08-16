for _ in range(int(input())):
    n=input()
    l=list(map(int,input().split()))
    l=sorted(l)
    c=0
    for i in range(len(l)-1):
        if (l[i]-l[i+1])==-1 or (l[i]-l[i+1])==0:
            pass
        else:
            c=1
            break
    if c==1:
        print("NO")
    else:
        print("YES")
 