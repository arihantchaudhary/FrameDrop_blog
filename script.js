function scrollCarousel(direction) {
    const carousel = document.getElementById('latestt');
    const scrollAmount = 300;
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
 
  document.addEventListener("DOMContentLoaded", () => {
  
    const sections = document.querySelectorAll(".comment-section");
  
    sections.forEach(section => {
      const postId = section.dataset.post;
      const nameInput = section.querySelector(".name-input");
      const commentInput = section.querySelector(".comment-input");
      const submitBtn = section.querySelector(".submit-btn");
      const commentsList = section.querySelector(".comments-list");
  
      let comments = JSON.parse(localStorage.getItem(postId)) || [];
  
      const renderComment = (comment, index) => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
  
        commentDiv.innerHTML = `
          <strong>${comment.name}</strong><br>
          ${comment.message}
          <button class="delete-btn" data-index="${index}">🗑</button>
        `;
  
        commentsList.appendChild(commentDiv);
      };
  
      comments.forEach((comment, index) => {
        renderComment(comment, index);
      });
  
      submitBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const message = commentInput.value.trim();
        if (!name || !message) return;
  
        const newComment = { name, message };
        comments.push(newComment);
        localStorage.setItem(postId, JSON.stringify(comments));
  
        renderComment(newComment, comments.length - 1);
        nameInput.value = "";
        commentInput.value = "";
      });
  
      commentsList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
          const index = e.target.dataset.index;
          comments.splice(index, 1);
          localStorage.setItem(postId, JSON.stringify(comments));
  
          commentsList.innerHTML = "";
          comments.forEach((c, i) => renderComment(c, i));
        }
      });
    });
  

    const searchInput = document.getElementById("searchInput");
    const blogLists = document.querySelectorAll(".bloglist");
  
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
  
        blogLists.forEach(blog => {
          const title = blog.querySelector(".tittle h1").textContent.toLowerCase();
          const content = blog.querySelector(".tittleinfo p").textContent.toLowerCase();
  
          if (title.includes(query) || content.includes(query)) {
            blog.style.display = "flex"; 
          } else {
            blog.style.display = "none";
          }
        });
      });
    }
  });
  
