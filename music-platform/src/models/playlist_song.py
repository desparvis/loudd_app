from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid
from config import Base 

class PlaylistSong(Base):
    __tablename__ = 'playlist_songs'

    playlist_id = Column(UUID(as_uuid=True), ForeignKey('playlists.id'), primary_key=True)
    song_id = Column(UUID(as_uuid=True), ForeignKey('songs.id'), primary_key=True)

    playlist = relationship("Playlist", back_populates="songs")
    song = relationship("Song", back_populates="playlists")