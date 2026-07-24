# GenAI Fundamentals Hands-On Exercises

## Exercise 1: Prompt Engineering Techniques

### Zero-Shot Prompting
Prompt: "Write a C# method that checks if a string is a palindrome."
```csharp
public static bool IsPalindrome(string str)
{
    str = str.ToLower().Replace(" ", "");
    int left = 0, right = str.Length - 1;
    while (left < right)
    {
        if (str[left] != str[right]) return false;
        left++; right--;
    }
    return true;
}
```

### Few-Shot Prompting
Prompt: "Given these examples of input/output, write a method:
- Input: [1,2,3] -> Output: 6
- Input: [10,20] -> Output: 30
Write a C# method that sums an array."
```csharp
public static int SumArray(int[] arr)
{
    return arr.Sum();
}
```

### Chain-of-Thought Prompting
Prompt: "Step by step, explain how to implement a binary search tree insert method in C#, then write the code."
```csharp
public class BSTNode
{
    public int Value;
    public BSTNode Left, Right;
    public BSTNode(int val) { Value = val; }
}

public class BST
{
    public BSTNode Root;
    public void Insert(int val)
    {
        Root = InsertRec(Root, val);
    }
    private BSTNode InsertRec(BSTNode node, int val)
    {
        if (node == null) return new BSTNode(val);
        if (val < node.Value) node.Left = InsertRec(node.Left, val);
        else if (val > node.Value) node.Right = InsertRec(node.Right, val);
        return node;
    }
}
```

## Exercise 2: GitHub Copilot Features
- **Code Suggestions**: Tab to accept inline suggestions
- **Comment-Driven Development**: Write comments and Copilot generates code
- **Test Generation**: Copilot generates unit tests from existing code
- **Documentation**: Auto-generates XML documentation comments
- **Refactoring**: Suggests improvements to existing code

## Exercise 3: Responsible AI Usage
- Always review AI-generated code for correctness and security
- Do not share sensitive data in prompts
- Understand licensing implications of AI-generated code
- Use AI as an assistant, not a replacement for understanding
- Validate AI-generated code against requirements
