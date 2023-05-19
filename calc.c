#include <stdio.h>  

int main()  
{
    char opt;  
    int n1, n2;   
    float ans;  
    printf (" Select an operator (+, -, *, /) to perform an operation in C calculator \n ");  
    scanf ("%c", &opt);  
    printf (" Enter the first number: ");  
    scanf(" %d", &n1);  
    printf (" Enter the second number: ");  
    scanf (" %d", &n2); 

    if (opt == '+')  
    {  
        ans = n1 + n2; 
        printf (" Addition of %d and %d is: %.2f", n1, n2, ans);  
    }  
          
    else if (opt == '-')  
    {  
        ans = n1 - n2;  
        printf (" Subtraction of %d and %d is: %.2f", n1, n2, ans);  
    }  
      
    else if (opt == '*')  
    {  
        ans = n1 * n2; 
        printf (" Multiplication of %d and %d is: %.2f", n1, n2, ans);  
    }  
      
    else if (opt == '/')  
    {  
        if (n2 == 0)   
        {  
            printf (" \n Divisor cannot be zero. Please enter another value ");  
            scanf ("%d", &n2);        
        }  
        ans = n1 / n2; 
        printf (" Division of %d and %d is: %.2f", n1, n2, ans);  
    }  
    else  
    {  
        printf(" \n You have entered wrong inputs ");  
    }   
    return 0;  
}  
