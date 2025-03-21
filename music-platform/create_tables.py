from config import engine, Base
from src.models.user import User  # Import User model first
from src.models.admin import Admin  # Import Admin model first
from src.models.fan import Fan  # Import Fan model first
from src.models.song import Song  # Import Song model first
from src.models.playlist import Playlist  # Import Playlist model first
from src.models import artist, like, comment, playlist_song, report

# Create all tables in the database
Base.metadata.create_all(engine)