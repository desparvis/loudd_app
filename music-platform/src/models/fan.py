from sqlalchemy import Column, String, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from config import Base

class Fan(Base):
    __tablename__ = 'fans'

    id = Column(UUID(as_uuid=True), ForeignKey('users.id'), primary_key=True)
    favorite_genres = Column(JSON)
    created_at = Column(String)
    updated_at = Column(String)